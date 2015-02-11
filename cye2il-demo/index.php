<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1">
	<title>Demo of 'Convert Youtube Embeds to Image Links'</title>
	<link rel="stylesheet" type="text/css" href="demo.css">
	<link rel="stylesheet" type="text/css" href="highlight/styles/default.css">
	<script type="text/javascript" src="highlight/highlight.pack.js"></script>
</head>
<body>
<section>
	<h1><a href="https://github.com/elundmark/Convert-Youtube-Embeds-to-Image-Links-UserScript/">Demo of <span>Convert Youtube Embeds to Image Links</span></a></h1>
	<div class="narrow">
		<aside>
			<ul><li>Remember to turn off your userscripts before viewing this demo!</li></ul>
		</aside>
	</div>
	<div class="videos">
		<!-- Standard embed -->
		<iframe width="640" height="360" src="//www.youtube.com/embed/Ax07muLvG7c" frameborder="0" allowfullscreen></iframe>
		<!-- Old-school OBJECT with fallback EMBED -->
		<object width="640" height="360">
			<param name="movie" value="https://www.youtube.com/v/_V_6yIvmzgw"></param>
			<param name="allowFullScreen" value="true"></param>
			<param name="allowscriptaccess" value="always"></param>
			<embed src="https://www.youtube.com/v/_V_6yIvmzgw" type="application/x-shockwave-flash" width="640" height="360" allowscriptaccess="always" allowfullscreen="true"></embed>
		</object>
		<!-- old-school EMBED -->
		<embed src="//www.youtube.com/embed/2RZ5xZ1kUlc" width="640" height="360" type="application/x-shockwave-flash">
		<!-- Dynamically injected iframe -->
		<div class="video-container" data-video-id="VVnOgS_48dQ"></div>
	</div>
</section>
<script type="text/javascript">
window.exampleHtml = (document.querySelectorAll("div.videos")[0].innerHTML.replace(/^\t{1,2}/gm, "").trim())+"\n";
</script>
<div class="narrow">
	<aside>
		<h3>Normal embeds</h3>
		<ul>
			<li>These four videos are loaded in the following order
				<ol>
					<li>Standard <code>&lt;iframe&gt;</code> tag.</li>
					<li>An oldschool <code>&lt;object&gt;</code> tag.</li>
					<li>An oldschool <code>&lt;embed&gt;</code> tag.</li>
					<li>Dynamically injected <code>&lt;iframe&gt;</code> tag after the page has loaded.</li>
				</ol>
			</li>
			<li>In this demo all videolinks will open in the same window, but the actual userscript will open the them in a new tab. If the prefer it to behave like in this demo you need to edit line <b>35</b>.</li>
			<li>Also notice that this demo fires the javascript <code>onload</code> so you have time to see what happens. The actual userscript works <b>much faster</b>.</li>
		</ul>
	</aside>
	<footer>
		<pre class="" id="html_source"><button id="show_html_source">Show the html source</button></pre>
		<pre id="javascript_source" class=""><button id="show_js_source">Show the javascript</button></pre>
	</footer>
	<aside>
		<h3>Older embed types</h3>
		<ul>
			<li>All <code>&lt;object&gt;</code> tags should work, provided they have either a <code>data=&quot;&quot;</code> attribute or a <code>&lt;param&gt;</code> tag inside that has the video url.</li>
			<li><code>&lt;embed&gt;</code> are also targeted, but only if they <em>live alone</em>, a.k.a. not inside an <code>&lt;object&gt;</code> tag.</li>
			<li>As a bonus, this script also works for most broken embeds regardless of browser.</li>
		</ul>
		<button id="load_objects">Click to load these 4 examples</button>
		<br/><button id="load_objects_noinit">Load them without doing anything</button>
	</aside>
</div>
<div class="videos">
	<footer id="object_examples"></footer>
</div>
<div class="narrow">
	<footer id="object_examples_code"></footer>
</div>
<script type="text/javascript">
"use strict";
window.addEventListener("load", function () {
	var $ = function (s) {
			return document.querySelector(s);
		},
		$$ = function (s) {
			return document.querySelectorAll(s);
		},
		loadedPatt = /\{\{:LOADED:\}\}/g,
		objectsHtml = ([
			'<object {{:LOADED:}}width="640" height="360">',
			'  <param name="movie" value="https://www.youtube.com/v/_iBLe6o4a8U"></param>',
			'  <param name="allowFullScreen" value="true"></param>',
			'  <param name="allowscriptaccess" value="always"></param>',
			'</object>',
			'',
			'<object {{:LOADED:}}width="640" height="360" data="https://www.youtube.com/embed/gHPQHxDo1qE"></object>',
			'',
			'<embed {{:LOADED:}}width="640" height="360" src="https://www.youtube.com/embed/bAR46AL5FTU">',
			'',
			'<object {{:LOADED:}}width="640" height="360">',
			'  <param name="movie" value="https://www.youtube.com/v/sf-sVtBBXB0"></param>',
			'  <param name="allowFullScreen" value="true"></param>',
			'  <param name="allowscriptaccess" value="always"></param>',
			'  <embed \n'+
				'    src="https://www.youtube.com/v/sf-sVtBBXB0" \n'+
				'    type="application/x-shockwave-flash" \n'+
				'    width="640" \n'+
				'    height="360" \n'+
				'    allowscriptaccess="always" \n'+
				'    allowfullscreen="true"\n'+
				'  ></embed>',
			'</object>'
		]),
		footer = $("#object_examples"),
		objectPre = document.createElement("PRE"),
		objectCode = document.createElement("CODE");
	objectPre.className = "loaded";
	objectCode.textContent = (objectsHtml.join("\n").replace(loadedPatt, "").trim())+"\n";
	objectPre.appendChild(objectCode);
	$("#object_examples_code").appendChild(objectPre);
	hljs.highlightBlock(objectCode);
	$("#load_objects").addEventListener("click", function () {
		var s = (objectsHtml.join("\n").replace(loadedPatt, "").trim())+"\n";
		footer.innerHTML = s;
	});
	$("#load_objects_noinit").addEventListener("click", function () {
		var s = (objectsHtml.join("\n").replace(loadedPatt, " data-cyetoil=\"loaded"+Date.now()+"\" ").trim())+"\n";
		footer.innerHTML = s;
	});
	$("#show_js_source").addEventListener("click", function () {
		var s = $("#us").textContent.match(/\/\/\{BEGIN CODE\}([\s\S]+)\/\/\{END CODE\}/i)[1];
		s = (s.trim())+"\n";
		$("#javascript_source").className += " loaded";
		$("#javascript_source").appendChild(document.createElement("CODE"));
		$("#javascript_source code").textContent = s+"";
		hljs.highlightBlock($("#javascript_source code"));
		$("#show_js_source").style.setProperty("display", "none", "important");
	});
	$("#show_html_source").addEventListener("click", function () {
		$("#html_source").className += " loaded";
		$("#html_source").appendChild(document.createElement("CODE"));
		$("#html_source code").textContent = window.exampleHtml+"";
		hljs.highlightBlock($("#html_source code"));
		$("#show_html_source").style.setProperty("display", "none", "important");
	});
	setTimeout(function () {
		Array.prototype.slice.call($$(".video-container"), 0).forEach(function (node) {
			var vf = document.createElement("IFRAME");
			vf.setAttribute("src", "//www.youtube.com/embed/"+node.dataset.videoId);
			vf.setAttribute("width", "640");
			vf.setAttribute("height", "360");
			vf.setAttribute("frameborder", "0");
			vf.setAttribute("allowfullscreen", "allowfullscreen");
			node.parentNode.replaceChild(vf, node);
		});
	}, 2000);
});
</script>
<script type="text/javascript" id="us">//<![CDATA[ 
//{BEGIN CODE}

<?php
$filecontents = file_get_contents("../convert_youtube_embeds_to_image_links.user.js");
print $filecontents;
?>

//{END CODE}
//]]>
</script>
</body>
</html>
