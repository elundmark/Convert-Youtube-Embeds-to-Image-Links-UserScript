// ==UserScript==
// @name         Convert Youtube Embeds to Image Links
// @description  Tries to turn embedded Youtube videos into thumbnails - this is based on "Stop Overzealous Embedding" https://openuserjs.org/users/ConnorBehan
// @namespace	 http://elundmark.se/code/
// @version      0.1.8
// @date         2015-02-08
// @autor        Erik Lundmark
// @contact      mail@elundmark.se
// @license      MIT; http://opensource.org/licenses/MIT
// @supportURL   https://github.com/elundmark/Convert-Youtube-Embeds-to-Image-Links-UserScript/issues
// @updateURL    http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/convert_youtube_embeds_to_image_links.meta.js
// @downloadURL  http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/convert_youtube_embeds_to_image_links.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA1VBMVEUAAAAAAAAFAQEGAQEHAQEIAQENAgIPAwMVBAQaBQUdBQUeBgYhBwcfCgosCQkyCgo3Cws8DAxADQ1GDg49FBRSEBBdExNhFBRwFxd5GBhAKCh6GRk4MjKMHR2PHR1DPT2nIyOtJCREQ0O2JiatKSm5JibBKCjIKirNKyvPKyvQKyvZLS3aLS3eLS3fLS3gLS3dLi7eLi7fLi7gLi7eLy/fLy/gLy/eNTXhNja0VFTkSkrkS0u5dHTpbW3pbm7vl5fwl5fks7PEv7/2wcH74+P++Pj///+XlX/1AAAAAXRSTlMAQObYZgAABERJREFUeAHtm2mT20QYhF8BCUeAbDh2uckSYGGJNLFm1IT7nv//kyirFrrsidc91UWRD34+pVIVPf0e8uFR4sR/y4kTJ4Zh+H/9W+z0jn/FSu/6V6z0hp9Y6Q0/sdIbfmKlN/zE+Nd330dGBsY55zmPUwKmksqIsWBl/WMqCSjTmOdNmr95fTAS5LdeHHZ4cI0+ntwfWt6dsEEcARnA+bDPvUv08Ojt4RncubjClryJQ4wAcEU/eXBp+5kAWIIQrFxdDESYgtB/co4byuaQHxd3BtJMwfMzAVBijxkr5/T39oB+KcEcO0wA52/0gPM/tgdY5PlzEy1/kyDvB7ji/PUpqH7y3mPcQH9q90+cQr//3tdoW4AtH9Kv90DdP/qvQXY38ImU/1KsX9gj3gn9V7DqJ4kBOhJcK/ULfs4g8yr39SnY/edrwaj3kT3w+88AIPom+vXzHcG4llE/l2B2q3HuHq4A5E3k9Xw/pohYmo3SExj9ZwtKu9NyTUb9fC207mqzfhQGIPoeePWvMIC6B3XglT92/QygJ6iVEe56/W8DKJtYKyPY9TOAvomVCZz6GWBGX4J6g18/A3QlqP9i+MkSE4hyN1Zi9n9l5ivxsU1kAGLWv3YgAWoPGIB49QOZOyD2oO5h1Q+U6P22VRscPxAZRJkCxcTwcwfUKVRCev1kYgCxB/XZ9PrZARCpB/UQXX4SY+fvTvUgHX5SooAoU6i3IPtJChBpCvVW6O/cAb0H9XY++/EpeigBlccvM8Bt/PmzEUDYw3qcP37wAxD65QD1r1+f+gFavx6Ac/AD8DNyX4Cf/ACtXw7w+y/+CNr+6wGGdy79JWz9agD+iuMHoF8OIPyman4iEvxdPYgi7R+R9HoPUoySn2h6+V2xhNZ/ovrVBJEEvxCg+5sBA0h+Iuu1PZgiSfMnul+7FyJL9RNNr/cgZslPJL3egxJJ8hPdL21ijkWffxvgI+eUZ2WJRfKTnXfdb/vPF5oAs9r/JsBv35snXeyA7meAT78zzplIRHT4GWD44HPjtKoJIM6fAYY3rt2TLgaQ/ITfv7yTriaA2tHadNTaRAboqcY6NWsCFPtKRoIlIjZ6/f7JKeGhlXH+Z5y1gcfXi1GFsT0cgV9/91kbiS1u/UYHGcCo30jAw2vDb21i+ifAl0b/rT2IFeCrl4z6jSnwMb6HZz257QRfYGXiYzy4esWvX96Ds0d7D7SBCVy/ss9nDzkBBuAUhP47m0g/9h9mOzPr5x5I/hJkYQ+s+oUErH8OIUHjdzeR/hQ7gAn6/fom0o/YozCB7ecmCvWTwgSEfn8K9I9LEILUJKDf7gH9JcdBZhQmoN/uAf0lzXGMV20/N5G8+cmUOh/vf4F/s8wZmNbn+zcTFpQ8oqQFqZQyAiWVhKVMI0rO8wjktGwLfc37Dwbh0+knpp/Q34nlJ34zfVy/D/3PJSdOnDhx4m//OuSgMioX6QAAAABJRU5ErkJggg==
// @include      *
// @exclude      http*://*.youtu.be/*
// @exclude      http*://youtu.be/*
// @exclude      http*://i*.ytimg.com/*
// @grant        GM_openInTab
// ==/UserScript==

/*
	Example webpage(s)
	--------------------------------------------------------------------------------------------------------
	http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/cye2il-demo/
	http://terrillthompson.com/tests/youtube.html
	http://www.rottentomatoes.com/m/tv_editorial/news/1931451/11_tv_shows_cancelled_after_the_first_episode/
	--------------------------------------------------------------------------------------------------------
*/

// Un-comment this line if you want to open the videos in the same window
//var GM_openInTab = function (s) { location.href = s; };

(function () {
	"use strict";
	var insertedObjectLinks = 0,
		iframeHtml,
		insideIframeId,
		openLink = typeof GM_openInTab === "function" ? GM_openInTab : function (s) {
			location.href = s;
		},
		ytWatchBaseHref = "https://www.youtube.com/watch?v=",
		youtubeIdPatt = /(?:\/v\/|\?v=|\/embed\/)([a-zA-Z0-9_\-]{11})/,
		risky_tags = ["object", "param", "embed", "iframe"],
		MutationObserver,
		observer,
		addPx = function (n) {
			return (/^\d+$/.test(n+"")) ? n+"px" : n+"";
		},
		getShortHandStyle = function (source, shorthand) {
			var o = {},
				computed = window.getComputedStyle(source, null);
			for (var i = computed.length; i--; ) {
				if (computed[i].indexOf(shorthand) === 0) {
					// { "margin-top": "0px" }
					o[computed[i]] = addPx(computed.getPropertyValue(computed[i]));
				}
			}
			return o;
		},
		genShorthandCssStyles = function (o) {
			var a = [];
			for (var prop in o) {
				if (o.hasOwnProperty(prop)) {
					a.push(prop+": "+o[prop]);
				}
			}
			return a;
		},
		getIframeTmpl = function (th) {
			return [
				"<!DOCTYPE html>\n"+
				"<head>\n"+
				"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n"+
				"<title>Youtube Embed</title>\n"+
				"<style> * { margin: 0 !important; padding: 0 !important; }\n"+
				"html, html body { overflow: hidden !important; background: #FFF; }\n</style>"+
				"</head>\n"+
				"<body>\n",
				th,
				"</body>\n"+
				"</html>"
			];
		},
		// Source: https://www.iconfinder.com/icons/317714/video_youtube_icon
		youtubeIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAACZ1BMVEUAAAD/A"+
			"AD/VVX/Pz/MMzPUKiraJCTfHx/iODjlMzPnLi7pKirXJyfaNjbdMzPfLy/iKiraMDDdLCzfKirhMTHjLS3bKyvdMzPeMT"+
			"HfLy/gLi7hLS3iMTHjMDDgMDDiLS3eMDDfLi7gLS3hLS3hMTHdLy/eLi7fMTHgMDDgLy/hLi7eLS3fLy/gLi7hMDDhMDD"+
			"eLi7fLi7fLS3fMDDgLi7hLi7hLS3fLy/fLi7gLS3hMDDhLy/fLi7fLS3fMDDgLy/gLy/eMDDfLy/fLy/gLS3fLi7fMDDg"+
			"Li7hLS3fLy/fLy/fLi7fLi7gLi7gLy/fLi7fLS3gLy/gLi7gLi7fLy/fLy/fLi7gLy/gLy/gLy/fLi7fLi7gLy/gLy/gL"+
			"i7gLi7fLy/fLy/fLy/fLi7eLi7gLy/gLy/gLS3fLi7fLi7gLy/gLi7gLi7gLi7fLy/fLy/fLS3eLi7gLi7gLy/fLS3fLi"+
			"7eLy/gLy/gLi7gLi7fLy/fLy/fLy/eLS3gLi7gLy/gLy/gLy/gLS3fLi7fLi7eLy/eLy/gLS3gLS3gLi7gLy/fLy/eLS3"+
			"eLi7gLi7gLy/gLy/gLS3fLS3fLi7eLy/gLy/gLS3gLi7gLy/fLy/fLy/eLS3gLi7gLy/gLy/fLS3fLi7eLy/eLy/eLy/g"+
			"LS3gLS3gLi7gLy/fLy/eLS3gLy/gLy/gLy/gLS3fLS3eLi7eLy/eLy/gLS3gLS3gLS3gLy/fLy/eLy/eLS3eLS3gLy/gL"+
			"y/gLS3eLS3eLS3eLy/eLy/gLy/hNjbkSkrkS0vpbW3pbm7vl5fwl5f2wcH74+P++Pj///8YYQu/AAAAwXRSTlMAAgMEBQ"+
			"YHCAkKCwwNDg8QEhUXGBocHR4fICEiJCUqLS8xMjM0Njc5Ojs8PkFCREVHSElKTE1OUFJUVVZYWVpbXF9gYWRpam1vcHF"+
			"yc3R2eXp8fX+BgoOFhoeIioyNjo+QkZKTlJaXmJmanZ6foKGio6SlpqmqrK2vsLGys7S1tre4ubq7vL2+v8DBwsTFxsfI"+
			"ycrLzM7P0NHS09XW19ja29zd3t/g4eLj5efo6err7O3u7/Dx8vP09fb3+fr7/P3+bYe0egAAA45JREFUeNrt2ntXFWUYB"+
			"fBtmYhaEphmaGqkGeal1MzMFMsKMypDLTNNUVS8QGERGWpRBpVmHsIjRge7gKLgQYmT4PHMlrBMPpQcvLzL63LO8zrPP/"+
			"P7BHvtPbPmnVkDn8/n8/l8vltKThv52ISpz2fNX7jo3ZX5G4tLysor9wT2Hwz90dDY3NIaOdURddjLiXacirSGmxobfg8"+
			"d3B/YXVH+xacfb1y7YunbC+dnzXxmwpgRqf1xp4ZPX7Ci+KvAoeNRWnW6uW7fzo+WZ08bhtsYl1/Pu65+zVjcXOYP9Mj3"+
			"T+BGSfn0jrMmCdcZEqSnqtJwjaF19FjdEMBICdFzNYNglFDBJlw1lSoycUU1VVTisolUkoFLtlLJevQa1E4lJ/oibhbVT"+
			"EHcZqpZhbgjVFODHunU46QAmE3qXgTvU9GbAMqoqAhADRV9B6CFiuqAftQUAYbSnfP/0KaBeJzudF/47yztScfTbgN0d/"+
			"9/jtaMw1y3AeLs7TAd2YkEsLfDPCxJJIC9HRYgL5EA9nZYjKJEAtjbIQ/bEglgb4dCVEgCyHcoRUASQL7DLtRKAsh32It"+
			"6SQD5DgfQJAkg3yGEVkkA+Q6H0S4JIN/hKM5IAsh3CMORBJDvcBKUBJDv0CYLIN8hYi+A2UEtgNlBLYDZQSuA2UE7QJfu"+
			"BP/qTnC+U/c27FK6DU37KgFM++78Zfdh1JXAwyhKd6y0b4QFBxJB+8ZRwZFM0L7RIDiUCto3QviT7lhp3wjiF7pjpX3jR"+
			"8GrmWlf4Bvxy2knRT7D53THSvvGFhTSHSvtG6sln2g6KZeLXLpjpX0jG6/RHdO+FVl4ke6Y9q2Yhil0x7RvxVhk0B3Tvh"+
			"WP4CG6Y9q3Ihn3OVTUBuA4FYUABKmoAsA2KtoC4D0qygEwi4omAXiYemIPoEcD1VQjroBqPkDcc1QzEXHJf1NJ873oVUQ"+
			"lebgkk0pG4bK9VPElrniKGpwMXFWocwUYAw/Qcz8lAUZaLT0WTME1UnbRU98OxnX6vBGhZ6KL78GNUpefoCec0kdxc/1m"+
			"bKh1eHfFqpeMxO0MGDMzp2BH4LdwzPK/7VVfb123KOvJ+3HHklNHjB4/+dkXXnrl9bdyl61cW1D0Sen28srd+36u+fVQ/"+
			"ZFj4ZNt7adjTiza0R5pbWlqPNzzc3+wak9leVlJ8eZ1Hy57J+fVl+fMmDx+dPqD/eHz+Xw+n893SxcBv2lqOtWj2hcAAA"+
			"AASUVORK5CYII=",
		isPartOfOBJECT = function (el) {
			var hasOBJECT = false,
				parent;
			while ( (parent=el.parentNode) ) {
				if ( parent.nodeName === "BODY" || parent.nodeName === "HTML" ) {
					hasOBJECT = false;
					break;
				} else if (parent.nodeName === "OBJECT") {
					hasOBJECT = parent;
					break;
				}
				el = parent;
			}
			return hasOBJECT;
		},
		getDim = function (cs, el, y) {
			var clientDim = "client"+(y[0].toUpperCase())+(y.substr(1));
			y = cs.getPropertyValue(y) || el[y] || el[clientDim] || "auto";
			return addPx(y);
		},
		makeImageAnchor = function (o, isIframe) {
			var url = ytWatchBaseHref+o.url,
				link = document.createElement("A"),
				span = document.createElement("SPAN"),
				linkCss = [],
				spanCss = [];
			link.href = url;
			link.title = url;
			link.target = "_top";
			linkCss = linkCss.concat([
				"background:url('https://i.ytimg.com/vi/"+o.url+"/0.jpg')  no-repeat scroll 50% 50% / 133% auto transparent"
			]);
			if (isIframe) {
				linkCss = linkCss.concat([
					"position: absolute",
					"top: 0",
					"bottom: 0",
					"left: 0",
					"right: 0"
				]);
			} else {
				linkCss = linkCss.concat(genShorthandCssStyles(o.border))
				.concat(genShorthandCssStyles(o.box))
				.concat(genShorthandCssStyles(o.margin))
				.concat([
					"float: "+(o.float||"none"),
					"z-index: "+o.zIndex,
					"top: "+o.top,
					"bottom: "+o.bottom,
					"left: "+o.left,
					"right: "+o.right,
					"position: "+(o.position !== "absolute" ? "relative" : o.position),
					"display: "+(/^(inline|none)$/.test(o.display) ? "inline-block" : o.display),
					// Must have an actual size - default will assume a 16:9 resolution
					"width: "+(o.width === "auto" || o.width === "0px" ? "320px" : o.width),
					"height: "+(o.height === "auto" || o.height === "0px" ?
						(o.width !== "auto" && o.width !== "0px" ? Math.ceil((parseInt(o.width, 10)/16)*9) : "180")+"px" : o.height)
				]);
			}
			spanCss = spanCss.concat([
				"background: url('"+youtubeIcon+"') no-repeat scroll 50% 50% / 64px 64px rgba(0,0,0,0.08)",
				"position: absolute",
				"top: 0",
				"bottom: 0",
				"left: 0",
				"right: 0"
			]);
			// Remove falsy values
			linkCss = linkCss.filter(function (s) { s = s.trim(); return !!s; });
			link.style.cssText = linkCss.concat([""]).join(" !important; ");
			span.style.cssText = spanCss.concat([""]).join(" !important; ");
			span.innerHTML = "&nbsp;";
			link.appendChild(span);
			return link;
		},
		makeClickHandler = function (o) {
			return function (event) {
				event.preventDefault();
				var link = event.currentTarget;
				// alias for GM_openInTab
				if (link.nodeName === "A") {
					link = link.querySelector("span");
				}
				link.style.setProperty("background-color", "rgba(0,0,0,0.6)", "important");
				openLink(ytWatchBaseHref+o.url);
				return false;
			};
		},
		init = function (dynamicNodes) {
			var nowNum = Date.now(),
				selector,
				paramParent,
				videoLink,
				riskyNode,
				computedStyle,
				riskyAttributes,
				fauxLink,
				videoId,
				badElements = [],
				linkHolder = document.createElement("DIV"),
				risky = !dynamicNodes ? document.querySelectorAll(risky_tags.join(", ")) : dynamicNodes;
			linkHolder.style.setProperty("display", "none", "important");
			linkHolder.setAttribute("hidden", true);
			linkHolder.dataset.cyetoilPlaceholder = nowNum+"";
			// Loop bad elements
			for (var j = 0, jLen = risky.length; j < jLen; j+=1) {
				riskyAttributes = risky[j].attributes;
				// Loop each elements attributes
				for (var k = 0, kLen = riskyAttributes.length; k < kLen; k+=1) {
					paramParent = null;
					// http://alistapart.com/article/flashsatay
					// EMBED is part of object, skip this EMBED entirely
					if (risky[j].nodeName === "EMBED" && isPartOfOBJECT(risky[j])) {
						break;
					}
					if (risky[j].nodeName === "PARAM") {
						// Save parent OBJECT for later use as replace & css target
						paramParent = isPartOfOBJECT(risky[j]);
						// Break if PARAM is not part of an OBJECT (invalid html)
						if (!paramParent) break;
					}
					riskyNode = riskyAttributes[k].value;
					if (!fauxLink) fauxLink = document.createElement("A");
					fauxLink.href = riskyNode;
					// Get id
					if ((videoId=(fauxLink.pathname+fauxLink.search).match(youtubeIdPatt)) === null) continue;
					// Check domain
					if (fauxLink.hostname.indexOf("youtube.com") >= 0
						|| fauxLink.hostname.indexOf("youtube-nocookie.com") >= 0) {
						badElements.push({
							"node": paramParent || risky[j],
							"url": videoId[1]
						});
						break;
					}
				}
			}
			badElements.forEach(function (el) {
				var linkTabHandler;
				if (/^loaded\d{13}$/.test(el.node.dataset.cyetoil+"")) {
					// Prevents PARAMs inside OBJECTs from duplicating (also fixes the Demo)
					return;
				}
				insertedObjectLinks += 1;
				// Copy all (common) styles that the video has
				computedStyle = window.getComputedStyle(el.node, null);
				el.margin = getShortHandStyle(el.node, "margin");
				el.border = getShortHandStyle(el.node, "border");
				el.box = getShortHandStyle(el.node, "box");
				el.float = computedStyle.getPropertyValue("float");
				el.clear = computedStyle.getPropertyValue("clear");
				el.display = computedStyle.getPropertyValue("display");
				el.position = computedStyle.getPropertyValue("position");
				el.zIndex = computedStyle.getPropertyValue("z-index");
				el.top = addPx(computedStyle.getPropertyValue("top"));
				el.bottom = addPx(computedStyle.getPropertyValue("bottom"));
				el.left = addPx(computedStyle.getPropertyValue("left"));
				el.right = addPx(computedStyle.getPropertyValue("right"));
				el.width = getDim(computedStyle, el.node, "width");
				el.height = getDim(computedStyle, el.node, "height");
				linkTabHandler = makeClickHandler.call(null, el);
				if (el.node.nodeName === "IFRAME") {
					el.node.setAttribute("data-cyetoil", "loaded"+nowNum);
					el.node.setAttribute("data-cyetoil-uid", insertedObjectLinks+"");
					videoLink = makeImageAnchor(el, true);
					// Stop the iframe anchor link, and set a click event w/ GM_openInTab on the iframe later
					iframeHtml = getIframeTmpl(videoLink.outerHTML).join("");
					// Remove any safeguards so I can access the iframe later
					el.node.removeAttribute("sandbox");
					el.node.addEventListener("load", function () {
						if (el.node.contentDocument) {
							el.node.contentDocument.querySelectorAll("a")[0].onclick = linkTabHandler;
						} else if (el.node.contentWindow) {
							(el.node.contentWindow.document||el.node.document).querySelectorAll("a")[0].onclick = linkTabHandler;
						}
					});
					// To prevent browser caching (ie ff, doesn't always work) I'm setting both src & srcdoc
					el.node.src = "data:text/html,base64,"+window.btoa(iframeHtml);
					el.node.srcdoc = iframeHtml;
				} else {
					videoLink = makeImageAnchor(el);
					el.node.setAttribute("data-cyetoil", "loaded"+nowNum);
					videoLink.setAttribute("data-cyetoil", "loaded"+nowNum);
					el.node.setAttribute("data-cyetoil-uid", insertedObjectLinks+"org");
					videoLink.setAttribute("data-cyetoil-uid", insertedObjectLinks+"");
					// Stop the default anchor link and set a click event w/ GM_openInTab
					videoLink.onclick = linkTabHandler;
					linkHolder.appendChild(videoLink);
				}
			});
			// Replace after collecting to preserve css order
			document.body.appendChild(linkHolder);
			selector = "[data-cyetoil='loaded"+nowNum+"'][data-cyetoil-uid]";
			Array.prototype.slice.call(linkHolder.querySelectorAll(selector), 0).forEach(function (node) {
				var moved = node.parentNode.removeChild(node),
					old = document.querySelector("[data-cyetoil-uid='"+(moved.dataset.cyetoilUid)+"org']");
				old.parentNode.replaceChild(moved, old);
			});
			linkHolder.parentNode.removeChild(linkHolder);
		};
	if (/^(?:(?:[a-zA-Z0-9\-]+\.)?youtube(?:\-nocookie)?\.com)$/.test(document.location.hostname)) {
		if (top.window != self.window
			&& (insideIframeId=(document.location.pathname+document.location.search).match(youtubeIdPatt)) !== null) {
			console.log("IFRAME", insideIframeId[1], document.location.href);
			console.log(document.querySelectorAll("body > *"));
		}
	} else {
		return console.log("not a youtube domain", document.location.href);
		// https://developer.mozilla.org/en/docs/Web/API/MutationObserver
		// https://dev.opera.com/articles/mutation-observers-tutorial/
		MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
		observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				var nodes = [];
				if (!mutation.addedNodes || mutation.addedNodes.length === 0) return;
				Array.prototype.slice.call(mutation.addedNodes, 0).forEach(function (node) {
					if (node.nodeName && risky_tags.indexOf(node.nodeName.toLowerCase()) !== -1) {
						setTimeout(function () {
							nodes.push(node);
							Array.prototype.slice.call(node.querySelectorAll("*"), 0).forEach(function (child) {
								// Add all nodes inside the detected one
								nodes.push(child);
							});
							init(nodes);
							// Allow other script to (maybe) act first, like fluidvids or fitvids
						}, 100);
					}
				});
			});
		});
		setTimeout(function () {
			// Allow other script to (maybe) act first, like fluidvids or fitvids
			init();
		}, 100);
		observer.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: false,
			characterData: false
		});
	}
}());
