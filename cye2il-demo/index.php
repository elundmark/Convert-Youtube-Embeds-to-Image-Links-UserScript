<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1">
	<title>Demo of 'Convert Youtube Embeds to Image Links'</title>
	<link rel="stylesheet" type="text/css" href="normalize.css">
	<link rel="stylesheet" type="text/css" href="demo.css">
	<link rel="stylesheet" type="text/css" href="highlight/styles/default.css">
	<script type="text/javascript" src="highlight/highlight.pack.js"></script>
</head>
<body>
<section>
	<h1><a href="https://github.com/elundmark/Convert-Youtube-Embeds-to-Image-Links-UserScript/">Demo of <span>Convert Youtube Embeds to Image Links</span></a></h1>
	<h3>Normal embeds</h3>
	<ul>
		<li>Every other embedded video nowadays seems to be <code>&lt;iframe&gt;</code>s, which are fully supported by this userscript. Besides an image linking to the video, it also show the time + the title + view count, mimicing the original embed to some extent. If the embed is an <code>&lt;object&gt;</code> or <code>&lt;embed&gt;</code>, it only gets the image. See futher down this page for three more examples of <code>&lt;object&gt;</code>s. I'm also working on adding Vimeo support, but I might make that into a separate userscript.</li>
		<li>These three videos were embedded in the following ways:
			<ol>
				<li>Standard <code>&lt;iframe&gt;</code> tag.</li>
				<li>An older, plain <code>&lt;embed&gt;</code> tag.</li>
				<li>Dynamically injected <code>&lt;iframe&gt;</code> tag after the page has loaded.</li>
			</ol>
		</li>
		<li>More information can be found <a href="https://github.com/elundmark/Convert-Youtube-Embeds-to-Image-Links-UserScript/blob/master/README.md">here</a>.</li>
		<li>Remember to <a href="https://github.com/elundmark/Convert-Youtube-Embeds-to-Image-Links-UserScript/#install-as-userscript">install</a> the userscript, otherwise this demo won't work!</li>
	</ul>
	<div class="videos" id="main_examples">
		<!-- Standard embed -->
		<iframe width="640" height="360" src="//www.youtube.com/embed/VVnOgS_48dQ" allowfullscreen></iframe>
		<!-- old-school EMBED -->
		<embed src="//www.youtube.com/v/2RZ5xZ1kUlc" width="640" height="360" type="application/x-shockwave-flash">
		<!-- Dynamically injected iframe -->
		<div class="video-container" data-video-id="Ax07muLvG7c"></div>
	</div>
	<script type="text/javascript">
	window.exampleHtml = (document.querySelectorAll("div.videos")[0].innerHTML.replace(/^\t{1,2}/gm, "").trim())+"\n";
	</script>
</section>
<section>
	<h2 hidden>Opening links</h2>
	<ul>
		<li>All videolinks will open in the same window, but if the prefer it to open in a new tab you need to change <code>iframesLinkTarget</code> and/or <code>nonIframesLinkTarget</code> in the sourcecode to <code>&quot;_blank&quot;</code>.</li>
	</ul>
</section>
<footer>
	<button disabled="disabled" id="show_html_source">Show the html source</button> <button disabled="disabled" id="show_js_source">Show the javascript</button>
	<pre id="html_source"></pre>
	<pre id="javascript_source"><code><?php
$filecontents = file_get_contents("../convert_youtube_embeds_to_image_links.user.js");
$filecontents = htmlspecialchars($filecontents, ENT_QUOTES);
print $filecontents;
?></code></pre>
</footer>
<section>
	<h3>Other embed types</h3>
	<ul>
		<li>All <code>&lt;object&gt;</code> tags should work, provided they have either a <code>data=&quot;&quot;</code> attribute or a <code>&lt;param&gt;</code> tag inside that has the video url.</li>
		<li><code>&lt;embed&gt;</code> are also targeted, but only if they <em>live alone</em>, a.k.a. not inside an <code>&lt;object&gt;</code> tag.</li>
		<li>A <code>&lt;a&gt;</code> tag will replace it.</li>
		<li>Since it replaces elements with something completely different, it will <em>try</em> to look like the video by copying most of the CSS styles. One limitation with this is <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=381328">a</a> <a href="https://bugs.webkit.org/show_bug.cgi?id=13343">bug</a> in the browser which makes it impossible to catch <code>auto</code> as a margin, like in <code>margin: 0 auto;</code>. Besides that exception, it should look exactly as the developer of the site intended.</li>
		<li>Also notice that the userscript fires at <code>document-end</code> for <code>&lt;iframe&gt;</code>s, and at <code>window onload</code> for all other embeds. with an additional 200 ms delay, so that the window has time to render properly before copying styles is possible.</li>
		<li>As a bonus, this script also works for most broken embeds regardless of browser.</li>
	</ul>
	<button disabled="disabled" id="load_objects">Click to load these 3 examples</button>
	<div class="videos" id="object_examples"></div>
</section>
<footer id="object_examples_code"></footer>
<script type="text/javascript">//<![CDATA[ 
"use strict";
window.addEventListener("load", function () {
	var makeArray = function (o) {
			// Turn array-like objects into Arrays
			// http://cwestblog.com/2015/02/11/javascript-quirk-array-slicing-with-node-lists/
			try {
				return Array.prototype.slice.call(o);
			} catch (e) {}
			for (var i = 0, l = o.length, a = new Array(i); i < l; i+=1) {
				if (i in o) {
					a[i] = o[i];
				}
			}
			return a;
		},
		$ = function (s) {
			return document.querySelector(s);
		},
		$$ = function (s) {
			return document.querySelectorAll(s);
		},
		objectsHtml = ([
			'<!-- Broken OBJECT (might work in some obscure browsers) -->',
			'<object width="640" height="360" type="application/x-shockwave-flash">',
			'  <param name="movie" value="https://www.youtube.com/v/_iBLe6o4a8U"></param>',
			'  <param name="allowFullScreen" value="true"></param>',
			'  <param name="allowscriptaccess" value="always"></param>',
			'</object>',
			'<!-- Plain OBJECT embed -->',
			'<object width="640" height="360" data="https://www.youtube.com/v/sf-sVtBBXB0" type="application/x-shockwave-flash"></object>',
			'<!-- OBJECT embed with EMBED fallback (cross-browser) -->',
			'<object width="640" height="360" type="application/x-shockwave-flash">',
			'  <param name="movie" value="https://www.youtube.com/v/_V_6yIvmzgw"></param>',
			'  <param name="allowFullScreen" value="true"></param>',
			'  <param name="allowscriptaccess" value="always"></param>',
			'  <embed \n'+
				'    src="https://www.youtube.com/v/_V_6yIvmzgw" \n'+
				'    type="application/x-shockwave-flash" \n'+
				'    width="796" \n'+
				'    height="448" \n'+
				'    allowscriptaccess="always" \n'+
				'    allowfullscreen="true"\n'+
				'  ></embed>',
			'</object>'
		]),
		footer = $("#object_examples"),
		objectPre = document.createElement("PRE"),
		objectCode = document.createElement("CODE");
	if (!objectPre.className !== "loaded") {
		objectPre.className = "loaded";
		objectCode.textContent = (objectsHtml.join("\n").trim())+"\n";
		objectPre.appendChild(objectCode);
		$("#object_examples_code").appendChild(objectPre);
		$("#object_examples_code").className = "loaded";
		hljs.highlightBlock(objectCode);
	}
	$("#load_objects").removeAttribute("disabled");
	$("#load_objects").addEventListener("click", function () {
		var s = (objectsHtml.join("\n").trim())+"\n";
		this.setAttribute("disabled", true);
		footer.innerHTML = s;
		footer.className = footer.className+" loaded";
	});
	$("#show_js_source").removeAttribute("disabled");
	$("#show_js_source").addEventListener("click", function () {
		$("#javascript_source").className = "loaded";
		hljs.highlightBlock($("#javascript_source code"));
		this.setAttribute("disabled", true);
	});
	$("#show_html_source").removeAttribute("disabled");
	$("#show_html_source").addEventListener("click", function () {
		$("#html_source").className = "loaded";
		$("#html_source").appendChild(document.createElement("CODE"));
		$("#html_source code").textContent = window.exampleHtml+"";
		hljs.highlightBlock($("#html_source code"));
		this.setAttribute("disabled", true);
	});
	setTimeout(function () {
		makeArray($$(".video-container")).forEach(function (node) {
			var vf = document.createElement("IFRAME");
			vf.setAttribute("src", "//www.youtube.com/embed/"+node.dataset.videoId);
			vf.setAttribute("width", "640");
			vf.setAttribute("height", "360");
			vf.setAttribute("allowfullscreen", "allowfullscreen");
			node.parentNode.replaceChild(vf, node);
		});
	}, 2000);
});
//]]>
</script>
<a href="https://github.com/elundmark/Convert-Youtube-Embeds-to-Image-Links-UserScript/"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/82b228a3648bf44fc1163ef44c62fcc60081495e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png"></a>
</body>
</html>
