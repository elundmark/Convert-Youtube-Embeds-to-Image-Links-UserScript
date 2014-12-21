// ==UserScript==
// @name         Convert Youtube Embeds to Image Links
// @description  Tries to turn embedded Youtube videos into thumbnails - this is based on "Stop Overzealous Embedding" https://openuserjs.org/users/ConnorBehan
// @namespace	 http://elundmark.se/code/
// @version      0.1.1
// @date         2014-12-21
// @autor        Erik Lundmark
// @contact      mail@elundmark.se
// @license      MIT; http://opensource.org/licenses/MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA1VBMVEUAAAAAAAAFAQEGAQEHAQEIAQENAgIPAwMVBAQaBQUdBQUeBgYhBwcfCgosCQkyCgo3Cws8DAxADQ1GDg49FBRSEBBdExNhFBRwFxd5GBhAKCh6GRk4MjKMHR2PHR1DPT2nIyOtJCREQ0O2JiatKSm5JibBKCjIKirNKyvPKyvQKyvZLS3aLS3eLS3fLS3gLS3dLi7eLi7fLi7gLi7eLy/fLy/gLy/eNTXhNja0VFTkSkrkS0u5dHTpbW3pbm7vl5fwl5fks7PEv7/2wcH74+P++Pj///+XlX/1AAAAAXRSTlMAQObYZgAABERJREFUeAHtm2mT20QYhF8BCUeAbDh2uckSYGGJNLFm1IT7nv//kyirFrrsidc91UWRD34+pVIVPf0e8uFR4sR/y4kTJ4Zh+H/9W+z0jn/FSu/6V6z0hp9Y6Q0/sdIbfmKlN/zE+Nd330dGBsY55zmPUwKmksqIsWBl/WMqCSjTmOdNmr95fTAS5LdeHHZ4cI0+ntwfWt6dsEEcARnA+bDPvUv08Ojt4RncubjClryJQ4wAcEU/eXBp+5kAWIIQrFxdDESYgtB/co4byuaQHxd3BtJMwfMzAVBijxkr5/T39oB+KcEcO0wA52/0gPM/tgdY5PlzEy1/kyDvB7ji/PUpqH7y3mPcQH9q90+cQr//3tdoW4AtH9Kv90DdP/qvQXY38ImU/1KsX9gj3gn9V7DqJ4kBOhJcK/ULfs4g8yr39SnY/edrwaj3kT3w+88AIPom+vXzHcG4llE/l2B2q3HuHq4A5E3k9Xw/pohYmo3SExj9ZwtKu9NyTUb9fC207mqzfhQGIPoeePWvMIC6B3XglT92/QygJ6iVEe56/W8DKJtYKyPY9TOAvomVCZz6GWBGX4J6g18/A3QlqP9i+MkSE4hyN1Zi9n9l5ivxsU1kAGLWv3YgAWoPGIB49QOZOyD2oO5h1Q+U6P22VRscPxAZRJkCxcTwcwfUKVRCev1kYgCxB/XZ9PrZARCpB/UQXX4SY+fvTvUgHX5SooAoU6i3IPtJChBpCvVW6O/cAb0H9XY++/EpeigBlccvM8Bt/PmzEUDYw3qcP37wAxD65QD1r1+f+gFavx6Ac/AD8DNyX4Cf/ACtXw7w+y/+CNr+6wGGdy79JWz9agD+iuMHoF8OIPyman4iEvxdPYgi7R+R9HoPUoySn2h6+V2xhNZ/ovrVBJEEvxCg+5sBA0h+Iuu1PZgiSfMnul+7FyJL9RNNr/cgZslPJL3egxJJ8hPdL21ijkWffxvgI+eUZ2WJRfKTnXfdb/vPF5oAs9r/JsBv35snXeyA7meAT78zzplIRHT4GWD44HPjtKoJIM6fAYY3rt2TLgaQ/ITfv7yTriaA2tHadNTaRAboqcY6NWsCFPtKRoIlIjZ6/f7JKeGhlXH+Z5y1gcfXi1GFsT0cgV9/91kbiS1u/UYHGcCo30jAw2vDb21i+ifAl0b/rT2IFeCrl4z6jSnwMb6HZz257QRfYGXiYzy4esWvX96Ds0d7D7SBCVy/ss9nDzkBBuAUhP47m0g/9h9mOzPr5x5I/hJkYQ+s+oUErH8OIUHjdzeR/hQ7gAn6/fom0o/YozCB7ecmCvWTwgSEfn8K9I9LEILUJKDf7gH9JcdBZhQmoN/uAf0lzXGMV20/N5G8+cmUOh/vf4F/s8wZmNbn+zcTFpQ8oqQFqZQyAiWVhKVMI0rO8wjktGwLfc37Dwbh0+knpp/Q34nlJ34zfVy/D/3PJSdOnDhx4m//OuSgMioX6QAAAABJRU5ErkJggg==
// @supportURL   https://github.com/elundmark/Convert-Youtube-Embeds-to-Image-Links-UserScript
// @updateURL    http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/convert_youtube_embeds_to_image_links.meta.js
// @downloadURL  http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/convert_youtube_embeds_to_image_links.user.js
// @include      *
// @exclude      http*://*.youtube.com/*
// @grant        none
// ==/UserScript==

/*
	Example webpage(s)
	--------------------------------------------------------------------------------------------------------
	http://jsfiddle.net/qo7tebr5/3/
	http://terrillthompson.com/tests/youtube.html
	http://www.rottentomatoes.com/m/tv_editorial/news/1931451/11_tv_shows_cancelled_after_the_first_episode/
	--------------------------------------------------------------------------------------------------------
*/

function init () {
	"use strict";
	var i, iLen, j, k, index, video_link, elemObj, risky_attributes, risky_node, iframeHtml,
		risky_tags = "object, embed, iframe",
		risky = document.querySelectorAll(risky_tags),
		bad_elements = [],
		getIframeTmpl = function (th) {
			return [
				"<!DOCTYPE html>\n"+
				"<head>\n"+
				"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n"+
				"<title>Youtube Embed</title>\n"+
				"<style> * { margin: 0; padding: 0; } html, html body { overflow: hidden; } </style>\n"+
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
		realCss = function (el, s) {
			return window.getComputedStyle(el, null).getPropertyValue(s);
		},
		makeImageAnchor = function (e, isIframe) {
			var url = "https://www.youtube.com/watch?v=" + e.url,
				link = document.createElement("a"),
				span = document.createElement("span");
			link.href = url;
			link.title = url;
			link.target = "_top";
			link.style.cssText = "padding: 0; position: relative; background: url('https://i3.ytimg.com/vi/"+
				e.url + "/0.jpg') 0 0 no-repeat; background-size: cover;";
			link.style.width = e.dims[0];
			link.style.height = e.dims[1];
			if (isIframe) {
				link.style.display = "block";
			} else {
				link.style.display = e.elDisplay === "inline" ? "inline-block" : e.elDisplay;
				link.style.marginTop = e.elMargins[0];
				link.style.marginBottom = e.elMargins[1];
				link.style.marginLeft = e.elMargins[2] !== "0px" ? e.elMargins[2] : "";
				link.style.marginRight = e.elMargins[3] !== "0px" ? e.elMargins[3] : "";
				link.style.float = e.elFloat || "none";
			}
			span.style.cssText = "position: absolute; top: 0; bottom: 0; left: 0; right: 0;";
			span.style.backgroundColor = "rgba(0, 0, 0, 0.08)";
			span.style.backgroundImage = "url('" +youtubeIcon + "')";
			span.style.backgroundPosition = "50% 50%";
			span.style.backgroundRepeat = "no-repeat";
			span.style.backgroundSize = "64px 64px";
			span.innerHTML = "&nbsp;";
			link.appendChild(span);
			return link;
		};

	for (j = 0; j < risky.length; j+=1) {
		index = 0;
		risky_attributes = risky[j].attributes;
		for (k = 0; k < risky_attributes.length; k+=1) {
			risky_node = risky_attributes[k].value;
			if ((risky_node.indexOf("youtube.com") >= 0) || (risky_node.indexOf("ytimg.com") >= 0) || (risky_node.indexOf("youtube-nocookie.com") >= 0)) {
				if (risky_node.indexOf("/v/") >= 0) {
					index = risky_node.indexOf("/v/") + 3;
				} else if (risky_node.indexOf("?v=") >= 0) {
					index = risky_node.indexOf("?v=") + 3;
				} else if (risky_node.indexOf("/embed/") >= 0) {
					index = risky_node.indexOf("/embed/") + 7;
				}
				if (index > 0) {
					bad_elements.push({
						el: risky[j],
						elMargins: [
							realCss(risky[j], "margin-top"),
							realCss(risky[j], "margin-bottom"),
							realCss(risky[j], "margin-left"),
							realCss(risky[j], "margin-right")
						],
						elFloat: realCss(risky[j], "float"),
						elDisplay: realCss(risky[j], "display"),
						url: risky_node.substring(index, index + 11),
						dims: [
							realCss(risky[j], "width") || risky[j].offsetWidth || risky[j].width || "auto",
							realCss(risky[j], "height") || risky[j].offsetHeight || risky[j].height || "auto"
						]
					});
				}
				break;
			}
		}
	}

	iLen = bad_elements.length;

	for (i = 0; i < iLen; i+=1) {
		elemObj = bad_elements[i];
		if (elemObj.el.nodeName === "IFRAME") {
			video_link = makeImageAnchor(elemObj, true);
			iframeHtml = getIframeTmpl(video_link.outerHTML).join("");
			elemObj.el.src = "data:text/html,base64,"+window.btoa(iframeHtml);
			elemObj.el.srcdoc = iframeHtml;
		} else {
			video_link = makeImageAnchor(elemObj);
			elemObj.el.style.display = "none";
			elemObj.el.parentNode.replaceChild(video_link, elemObj.el);
		}
	}
}
init();
