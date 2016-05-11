// ==UserScript==
// @name         Convert Youtube Embeds to Image Links
// @description  Tries to turn embedded Youtube videos into thumbnails - this is based on "Stop Overzealous Embedding" https://openuserjs.org/users/ConnorBehan
// @namespace	 http://elundmark.se/code/
// @version      0.2.7
// @date         2016-05-11
// @autor        Erik Lundmark
// @contact      e@3r1k.se
// @license      MIT; http://opensource.org/licenses/MIT
// @supportURL   https://github.com/elundmark/Convert-Youtube-Embeds-to-Image-Links-UserScript/issues
// @updateURL    http://f.3r1k.se/js/convert_youtube_embeds_to_image_links/convert_youtube_embeds_to_image_links.meta.js
// @downloadURL  http://f.3r1k.se/js/convert_youtube_embeds_to_image_links/convert_youtube_embeds_to_image_links.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA1VBMVEUAAAAAAAAFAQEGAQEHAQEIAQENAgIPAwMVBAQaBQUdBQUeBgYhBwcfCgosCQkyCgo3Cws8DAxADQ1GDg49FBRSEBBdExNhFBRwFxd5GBhAKCh6GRk4MjKMHR2PHR1DPT2nIyOtJCREQ0O2JiatKSm5JibBKCjIKirNKyvPKyvQKyvZLS3aLS3eLS3fLS3gLS3dLi7eLi7fLi7gLi7eLy/fLy/gLy/eNTXhNja0VFTkSkrkS0u5dHTpbW3pbm7vl5fwl5fks7PEv7/2wcH74+P++Pj///+XlX/1AAAAAXRSTlMAQObYZgAABERJREFUeAHtm2mT20QYhF8BCUeAbDh2uckSYGGJNLFm1IT7nv//kyirFrrsidc91UWRD34+pVIVPf0e8uFR4sR/y4kTJ4Zh+H/9W+z0jn/FSu/6V6z0hp9Y6Q0/sdIbfmKlN/zE+Nd330dGBsY55zmPUwKmksqIsWBl/WMqCSjTmOdNmr95fTAS5LdeHHZ4cI0+ntwfWt6dsEEcARnA+bDPvUv08Ojt4RncubjClryJQ4wAcEU/eXBp+5kAWIIQrFxdDESYgtB/co4byuaQHxd3BtJMwfMzAVBijxkr5/T39oB+KcEcO0wA52/0gPM/tgdY5PlzEy1/kyDvB7ji/PUpqH7y3mPcQH9q90+cQr//3tdoW4AtH9Kv90DdP/qvQXY38ImU/1KsX9gj3gn9V7DqJ4kBOhJcK/ULfs4g8yr39SnY/edrwaj3kT3w+88AIPom+vXzHcG4llE/l2B2q3HuHq4A5E3k9Xw/pohYmo3SExj9ZwtKu9NyTUb9fC207mqzfhQGIPoeePWvMIC6B3XglT92/QygJ6iVEe56/W8DKJtYKyPY9TOAvomVCZz6GWBGX4J6g18/A3QlqP9i+MkSE4hyN1Zi9n9l5ivxsU1kAGLWv3YgAWoPGIB49QOZOyD2oO5h1Q+U6P22VRscPxAZRJkCxcTwcwfUKVRCev1kYgCxB/XZ9PrZARCpB/UQXX4SY+fvTvUgHX5SooAoU6i3IPtJChBpCvVW6O/cAb0H9XY++/EpeigBlccvM8Bt/PmzEUDYw3qcP37wAxD65QD1r1+f+gFavx6Ac/AD8DNyX4Cf/ACtXw7w+y/+CNr+6wGGdy79JWz9agD+iuMHoF8OIPyman4iEvxdPYgi7R+R9HoPUoySn2h6+V2xhNZ/ovrVBJEEvxCg+5sBA0h+Iuu1PZgiSfMnul+7FyJL9RNNr/cgZslPJL3egxJJ8hPdL21ijkWffxvgI+eUZ2WJRfKTnXfdb/vPF5oAs9r/JsBv35snXeyA7meAT78zzplIRHT4GWD44HPjtKoJIM6fAYY3rt2TLgaQ/ITfv7yTriaA2tHadNTaRAboqcY6NWsCFPtKRoIlIjZ6/f7JKeGhlXH+Z5y1gcfXi1GFsT0cgV9/91kbiS1u/UYHGcCo30jAw2vDb21i+ifAl0b/rT2IFeCrl4z6jSnwMb6HZz257QRfYGXiYzy4esWvX96Ds0d7D7SBCVy/ss9nDzkBBuAUhP47m0g/9h9mOzPr5x5I/hJkYQ+s+oUErH8OIUHjdzeR/hQ7gAn6/fom0o/YozCB7ecmCvWTwgSEfn8K9I9LEILUJKDf7gH9JcdBZhQmoN/uAf0lzXGMV20/N5G8+cmUOh/vf4F/s8wZmNbn+zcTFpQ8oqQFqZQyAiWVhKVMI0rO8wjktGwLfc37Dwbh0+knpp/Q34nlJ34zfVy/D/3PJSdOnDhx4m//OuSgMioX6QAAAABJRU5ErkJggg==
// @include      *
// @exclude      http*://youtu.be/*
// @exclude      http*://*.youtu.be/*
// @exclude      http*://*.ytimg.com/*
// @exclude      https://www.youtube.com/feed/*
// @exclude      https://www.youtube.com/channel/*
// @exclude      https://www.youtube.com/user/*
// @exclude      https://www.youtube.com/watch?*
// @exclude      https://www.youtube.com/playlist?*
// @exclude      https://www.youtube.com/my_videos?*
// @exclude      https://www.youtube.com/dashboard?*
// @exclude      https://www.youtube.com/view_all_playlists*
// @grant        none
// ==/UserScript==

// Change iframesLinkTarget / nonIframesLinkTarget to "_blank" if you want to open the videos in a new window
(function () {
	"use strict";
	if (!Boolean("getComputedStyle" in window)) return;
	var ytWatchBaseHref = "https://www.youtube.com/watch?v=",
		youtubeDomainPatt = /^(?:(?:[a-zA-Z0-9\-]+\.)?youtube(?:\-nocookie)?\.com)$/,
		riskyTags = ["object", "param", "embed"],
		youtubeIdPatt = /(?:\/v\/|\?v=|\/embed\/)([a-zA-Z0-9_\-]{11})/,
		iframesLinkTarget = "_top",
		nonIframesLinkTarget = "_self",
		loadedPatt = /^loaded\d{13}$/,
		replCounter = 0,
		insideIframeId,
		MutationObserver,
		observer,
		makeArray = function (o) {
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
		getIframeTmpl = function (docTitle, th) {
			// Inline hardcoded style attributes helps weird "leakage" of forced styles to apply to other elements
			// can't replicate it but it happened before this, even to a top window from an iframe!
			return [
				"<!DOCTYPE html>"+
				"<html style='margin:0!important;padding:0!important;overflow:hidden!important;'>"+
				"<head>"+
				"<meta charset='utf-8'>"+
				"<meta name='viewport' content='width=device-width, initial-scale=1'>"+
				"<title>"+docTitle+"</title>"+
				"</head>"+
				"<body style='margin:0!important;padding:0!important;background:#FFF;overflow:hidden!important;'>",
				th,
				"</body>"+
				"</html>"
			];
		},
		// New icon: https://www.iconfinder.com/icons/410520 (16% auto)
		// Old icon: https://www.iconfinder.com/icons/669690 (20% auto)
		youtubeIcon = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUwMCIgd2lkdGg9IjUwMCIgeG1sbnM9Imh0dHA6Ly93"+
			"d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwdjUwMGg1MDBWMHoiIGZpbGw9IiNjYzE4MWUiLz48cGF0aCBkP"+
			"SJNNTAwIDI0Ni4yNzJWNTAwSDE4NC4wMThsLTc1Ljc1Mi03NS43NTItLjQxLTE3NS42NzcgOTAuNjEzLTIyLjA0My0yMy"+
			"44MjYtMjMuODI1IDMuNTctNzUuOTE2LTcuODU0LTY2LjgxIDI2Ljc5NyAyNi43OTYgMjQuNTg3LTI2LjgwNCA0My43Mzc"+
			"gNDMuNzM3IDMuODItMS44IDMyLjA3MyAzMi4wNzMgMTIuNjg1LTM3LjY4NyAyMS44NDUgMjEuODQ1IDE0LjE2LTIxLjh6"+
			"IiBzdHJva2U9IiMwMDAiIG9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTE0Ny44NzUgNjBjNC41MDIgMTMuMjM1IDkuMjEyI"+
			"DI2LjUxIDEzLjcyIDM5Ljc1IDYuODUgMTkuOTAyIDExLjEyNSAzNC44OTIgMTMuMDYgNDUuMTI1djU3LjgxM2gyMS4zNz"+
			"Z2LTU3LjgxM0wyMjEuNzIgNjBoLTIxLjU5NWwtMTQuNTYzIDU2LjAzTDE3MC4zNDUgNjBoLTIyLjQ3em0xMDIuNDcgMzU"+
			"uMDYzYy05LjYgMC0xNy4wODIgMy42MzQtMjIuNDA3IDEwLjkwNi00LjEgNS4zNy02LjAzMiAxMy42OTUtNi4wMzIgMjUu"+
			"MDZ2MzcuMjJjMCAxMS4zIDEuOTMzIDE5LjY4IDYuMDMgMjUgNS4zMjggNy4yNSAxMi44MSAxMC45MDYgMjIuNDA4IDEwL"+
			"jkwNiA5LjY1NSAwIDE3LjE3LTMuNjU1IDIyLjUtMTAuOTA2IDQuMDQtNS4zMiA1Ljk3LTEzLjcgNS45Ny0yNWwtLjAwMi"+
			"0zNy4yMmMwLTExLjM2NC0xLjkzLTE5LjY5LTUuOTY4LTI1LjA2LTUuMzMtNy4yNzMtMTIuODQ1LTEwLjkwNy0yMi41LTE"+
			"wLjkwN3ptNDQuMzEgMS4yOHY4NC4wOTRjMCA3LjUwNi42ODggMTIuNTkgMS43NSAxNS44MTMgMS45MjMgNS4zODYgNi4x"+
			"NzUgNy45MDYgMTIuMzc2IDcuOTA2IDcuMDMgMCAxNC4zNjQtNC4yNyAyMi4wMzMtMTMuMDYydjExLjU5NGgxOS4yNVY5N"+
			"i4zNDRoLTE5LjI1djgxLjI4Yy00LjI3IDYuMDM1LTguMzM2IDktMTIuMTg4IDktMi41ODYgMC00LjA3NS0xLjUxNi00Lj"+
			"UtNC41LS4yMzItLjYzLS4yNS0yLjk4NC0uMjUtNy41di03OC4yOGgtMTkuMjJ6bS00NC4zMSAxNi4wNjNjNi4yMTIgMCA"+
			"5LjE4NiA0LjkxMyA5LjE4NiAxNC43NXY0NC43NWMwIDkuODQtMi45NzQgMTQuNzItOS4xODYgMTQuNzJzLTkuMTg4LTQu"+
			"ODgtOS4xODgtMTQuNzJ2LTQ0Ljc1YzAtOS44MzcgMi45NzYtMTQuNzUgOS4xODgtMTQuNzV6bS03LjcyIDEwNy42ODhjL"+
			"TM3LjAxNSAwLTc0LjE2NC4yNzMtMTEwLjg3NSA0LjM3NS0xNi41MTggMS44NDUtMzAuMjM0IDE0LjI1LTM0LjA5NCAzMS"+
			"4wMy01LjQ5IDIzLjg5Ny01LjU2MiA0OS45Ni01LjU2MiA3NC41NjN2MS43OGMuMDAyIDI0LjA4NS4xNCA0OS40NTMgNS4"+
			"1IDcyLjc4MiAzLjg2IDE2Ljc4IDE3LjYwNyAyOS4xODYgMzQuMTI1IDMxLjAzIDM2Ljc1MiA0LjExIDczLjkxIDQuMzQ1"+
			"IDExMC45NjggNC4zNDVIMjU3YzM3LjA1NyAwIDc0LjIxNy0uMjM2IDExMC45Ny00LjM0NCAxNi41MTctMS44NDUgMzAuM"+
			"jY0LTE0LjI1MiAzNC4xMjQtMzEuMDMgNS40MTMtMjMuNTYgNS40OTgtNDkuMjM1IDUuNS03My41MzJ2LTEuMDNjMC0yNC"+
			"42MDQuMDU0LTUwLjY2Ny01LjQzOC03NC41NjQtMy44NTgtMTYuNzgtMTcuNTc3LTI5LjE4NS0zNC4wOTQtMzEuMDMtMzY"+
			"uNzEzLTQuMTAyLTczLjg1OC00LjM3Ni0xMTAuODc1LTQuMzc2SDI0Mi42MjV6bS0xMjcgMzkuMjVoNjYuNXYxOS44NzVI"+
			"MTU5LjI4VjQwMC41NmgtMjEuMjE4VjI3OS4yMmgtMjIuNDM3di0xOS44NzZ6bTE0MC41OTQgMGgxOS4wNnY0Ni4xMjVjN"+
			"i4xNTctNy41NzggMTIuNzA4LTExLjQwOCAxOS43Mi0xMS40MDggNy41OSAwIDEyLjY2IDMuOTk1IDE1LjIyIDExLjg3NS"+
			"AxLjI2MiA0LjIzNSAxLjkzNiAxMS4yIDEuOTM2IDIxLjE1N3Y0MS44NzVjMCA5LjczOC0uNjc1IDE2Ljc1Ni0xLjkzNyA"+
			"yMS4yMTdDMzA3LjY2IDM5OC4wMSAzMDIuNTkgNDAyIDI5NSA0MDJjLTYuNzc4IDAtMTMuMzUtMy43NDMtMTkuNzItMTEu"+
			"NjI1djEwLjE4OGgtMTkuMDZ2LTE0MS4yMnptOTkuNDY3IDM0LjcyYzkuNTY2LS4wMDIgMTcuMTkyIDMuNTc3IDIyLjUzM"+
			"iAxMC43OCAzLjk5MiA1LjMyIDUuODc0IDEzLjUzNiA1Ljg3NCAyNC43OHYyMS43ODJIMzQ1Ljk3djE4LjY1NmMwIDkuNz"+
			"QgMy4xNjcgMTQuNjI1IDkuNzE3IDE0LjYyNSA0LjcgMCA3LjQ3NC0yLjU1NCA4LjU2My03LjY1Ni4xNzMtMS4wMzguNDA"+
			"2LTUuMjkuNDA2LTEyLjkzNmgxOS40Mzh2Mi44MTJjMCA2LjEzMy0uMjI3IDEwLjM4LS40MDYgMTIuMjgtLjYzNiA0LjIz"+
			"Ni0yLjExNSA4LjAzNi00LjQzOCAxMS40MDgtNS4yNyA3LjY0LTEzLjEwNSAxMS40MDYtMjMuMDYzIDExLjQwNi05Ljk3M"+
			"yAwLTE3LjU4LTMuNTkzLTIzLjA5My0xMC43OC00LjA1Mi01LjI2Ny02LjA5NC0xMy41NC02LjA5NC0yNC43MnYtMzYuOD"+
			"c1YzAtMTEuMjQ1IDEuODI2LTE5LjQ2IDUuODc1LTI0Ljc4IDUuNTE1LTcuMjA0IDEzLjA4Mi0xMC43ODMgMjIuODEzLTE"+
			"wLjc4M3ptLTE3MC43OCAxLjI4aDE5LjAzdjc3LjQ3YzAgNC40NjcuMDEgNi43NzUuMTg4IDcuNDA1LjQ2NCAyLjk1MiAx"+
			"LjkyIDQuNDM2IDQuNDcgNC40MzYgMy44MjUgMCA3LjgzLTIuOTAyIDEyLjA2LTguODc1di04MC40MzZoMTkuMDY0djEwN"+
			"S4yMmwtMTkuMDY0LS4wMDJ2LTExLjQ2OGMtNy41OCA4LjY5NC0xNC43NzIgMTIuOTA2LTIxLjc4IDEyLjkwNi02LjE0My"+
			"AwLTEwLjQwNi0yLjQ4NS0xMi4zMTQtNy44MTMtMS4wMzgtMy4xODctMS42NTYtOC4xOTgtMS42NTYtMTUuNjI1di04My4"+
			"yMTh6bTk5Ljg3NCAxNS44NzVjLTMuMTMzIDAtNi4zMDggMS40NzgtOS41IDQuNjI0djY0LjEyNWMzLjE5MiAzLjE4NiA2"+
			"LjM2NiA0LjY4NiA5LjUgNC42ODYgNS41IDAgOC4zMTQtNC42NSA4LjMxNC0xNC4xNTZ2LTQ0LjkzOGMwLTkuNTA2LTIuO"+
			"DEzLTE0LjM0My04LjMxMy0xNC4zNDN6bTcwLjc4MyAwYy02LjM3OCAwLTkuNTk0IDQuODYtOS41OTQgMTQuNTkydjkuNz"+
			"JoMTkuMDZ2LTkuNzJjLjAwMi05LjczMy0zLjE1NS0xNC41OTMtOS40NjctMTQuNTkzeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==",
		isPartOfOBJECT = function (el) {
			var parent;
			if (!el) return parent;
			while ( (parent=el.parentNode) ) {
				if ( parent.nodeName === "BODY" || parent.nodeName === "HTML" ) {
					parent = false;
					break;
				} else if (parent.nodeName === "OBJECT") {
					break;
				}
				el = parent;
			}
			return parent;
		},
		removeBackgroundRules = (function () {
			var patt = /^(?:[\-_][a-zA-Z0-9]+[\-_])?background(?:$|\-)/;
			return function (a) {
				// Remove all -x-|background|-
				return !patt.test(a[0]);
			};
		}()),
		validateStyleArray = function (a) {
			a = Array.isArray(a) && a[0] && a[1] ? a : null;
			return !!a;
		},
		sortMultiArray = function (a, b) {
			// Sort so vendor prefixes goes at the top
			// www.w3.org/TR/CSS2/syndata.html - "An initial dash or underscore [...]"
			return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
		},
		copyAllStyles = function (element, psuedoSelector, property) {
			// stackoverflow.com/questions/2558426
			var styles = [],
				cs;
			// The DOM Level 2 CSS way
			cs = getComputedStyle(element, psuedoSelector);
			if (cs.length !== 0) {
				for (var i = 0, len = cs.length; i < len; i+=1) {
					if (!property || (property && cs.item(i) === property)) {
						styles.push([cs.item(i), cs.getPropertyValue(cs.item(i))]);
						if (property) break;
					}
				}
			} else {
				// Opera workaround. Opera doesn't support `item`/`length` on CSSStyleDeclaration.
				for (var k in cs) {
					if (cs.hasOwnProperty(k)) {
						if (!property || (property && k === property)) {
							styles.push([k, cs[k]]);
						}
						if (property) break;
					}
				}
			}
			// Return single rule
			if (property) return styles[0];
			// Remove falsies
			styles = styles.filter(validateStyleArray);
			// Link has its own background, leave psuedo-selectors as they are though
			if (!psuedoSelector) styles = styles.filter(removeBackgroundRules);
			styles.sort(sortMultiArray);
			return styles;
		},
		getDim = (function () {
			var numPatt = /^\d+$/;
			return function (dim, el, y) {
				var clientDim = "client"+(y[0].toUpperCase())+(y.substr(1));
				dim = parseInt(dim, 10) === 0 ? (el.getAttribute(y) || el[clientDim]) : "auto";
				return (numPatt.test(dim+"")) ? dim+"px" : dim+"";
			};
		}()),
		makeStyles = function (o, type, psIds) {
			o[type] = {};
			if (psIds) {
				// (Object) <A> Psuedo elements :before { rule: 1; } :after { rule: 1; }
				o[type].styleTagContent = "a[data-cyetoil='loaded"+psIds[0]+"'][data-cyetoil-uid='"+psIds[1]+"']:"+type+" {\n";
				o[type].styleTagContent += (copyAllStyles(o.node, ":"+type).map(function (a) {
					return a ? a.join(":")+"!important;\n" : "";
				}).join("")+"\n}\n");
				o[type].styleTag = document.createElement("STYLE");
				o[type].styleTag.textContent = o[type].styleTagContent;
				o[type].styleTag.dataset.cyetoilStyleFor = type+psIds[1];
				document.querySelector("head").appendChild(o[type].styleTag);
			} else {
				// (Object) <A> styles
				o[type].styles = (copyAllStyles(o.node, null).concat([
					[
						"background",
						"url('https://i.ytimg.com/vi/"+o.videoId+"/0.jpg') no-repeat scroll 50% 50% / 133% auto transparent"
						// 320x180 widescreen version
						//"url('https://img.youtube.com/vi/"+o.videoId+"/mqdefault.jpg') no-repeat scroll 50% 50% / 100% 100% transparent"
					]
				]).map(function (a) {
					// Must be able to set an absolute positioned SPAN inside it
					if (a[0] === "position" && a[1] !== "fixed" && a[1] !== "absolute") a[1] = "relative";
					// It's an inline <A> tag, so it must be block-ish
					if (a[0] === "display" && a[1] === "inline") a[1] = "inline-block";
					// Force cursor back to pointer
					if (a[0] === "cursor") a[1] = "pointer";
					// <A> must have a set dimension
					if (a[0] === "width") {
						if (a[1] === "auto" || a[1] === "0px") a[1] = getDim(a[1], o.node, "width");
						// Force a minimum width - usually the object hasn't loaded yet, hence the 200ms delays
						if (a[1] === "auto" || a[1] === "0px") a[1] = "320px";
						o.forceObjectWidth = a[1];
					}
					if (a[0] === "height") {
						if (a[1] === "auto" || a[1] === "0px") a[1] = getDim(a[1], o.node, "height");
						a[1] = (
							(a[1] === "auto" || a[1] === "0px" ? (o.forceObjectWidth !== "auto" && o.forceObjectWidth !== "0px" ?
							// forces a 16:9 resolution for objects with forced dimensions
							Math.ceil((parseInt(o.forceObjectWidth, 10)/16)*9) : "180")+"px" : a[1])
						);
					}
					return a ? a.join(":")+"!important;" : "";
				}).join(""));
			}
			return o;
		},
		makeImageAnchor = (function () {
			var linkCss = [
					"margin:0",
					"padding:0",
					"position:absolute",
					"top:0",
					"bottom:0",
					"left:0",
					"right:0"
				],
				bannerCss = [
					"position:absolute",
					"bottom:0",
					"left:0",
					"height:30px",
					"width:100%",
					"box-sizing:border-box",
					"padding:8px 0 0 12px",
					"text-shadow:0 1px 0 #000000",
					"font:13px/1 sans-serif",
					"color:rgb(255,255,255)",
					"background-color:rgba(0,0,0,0.75)",
					"overflow:hidden",
					"white-space:nowrap",
					"text-overflow:ellipsis",
					"border-bottom:1px solid #000000"
				],
				spanCss = [
					"margin:0",
					"padding:0",
					"opacity:0.85",
					"position:absolute",
					"top:0",
					"bottom:0",
					"left:0",
					"right:0"
				],
				makeinfoBar = function (first, middle, last, target) {
					var firstEl = first ? document.createElement("EM") : null,
						middleEl = document.createTextNode(middle),
						lastEl = last ? document.createElement("EM") : null;
					if (firstEl) {
						firstEl.textContent = first;
						firstEl.style.setProperty("font-style", "normal", "important");
						firstEl.style.setProperty("color", "rgba(255,255,255,0.8)", "important");
						target.appendChild(firstEl);
					}
					target.appendChild(middleEl);
					if (lastEl) {
						lastEl.textContent = last;
						lastEl.style.setProperty("font-style", "normal", "important");
						lastEl.style.setProperty("color", "rgba(255,255,255,0.8)", "important");
						target.appendChild(lastEl);
					}
					return target;
				};
			return function (o, isIframe) {
				var url = ytWatchBaseHref+o.videoId,
					link = document.createElement("A"),
					shield = document.createElement("SPAN"),
					infoBar;
				link.href = url;
				link.title = (o.atitle ? o.atitle+" - "+o.videoId : url);
				link.setAttribute(
					"onmouseup",
					"this.querySelector('span').style.setProperty('background-color','rgba(0,0,0,0.6)','important');"+
						"this.querySelector('span').style.setProperty('opacity','1','important');"+
						"this.querySelector('i').style.setProperty('background-color','rgb(0,0,0)','important');"
					);
				if (isIframe) {
					infoBar = makeinfoBar(
						(o.stats.time ? o.stats.time+"  " : ""),
						link.title,
						(o.stats.views ? " - "+o.stats.views : ""),
						document.createElement("I")
					);
					link.title = infoBar.textContent;
					link.target = iframesLinkTarget;
					infoBar.setAttribute("style", bannerCss.concat([""]).join("!important;"));
					shield.setAttribute("style", spanCss.concat([
						"background:url('"+youtubeIcon+"') no-repeat scroll 50% 50% / 16% auto rgba(0,0,0,0.08)",
						"bottom:25px",
						""
					]).join("!important;"));
				} else {
					link.target = nonIframesLinkTarget;
					shield.setAttribute("style", spanCss.concat([
						"background:url('"+youtubeIcon+"') no-repeat scroll 50% 50% / 16% auto rgba(0,0,0,0.08)",
						"bottom:0",
						""
					]).join("!important;"));
				}
				if (isIframe) {
					link.setAttribute("style", linkCss.concat([
						"background:url('https://i.ytimg.com/vi/"+o.videoId
							+"/0.jpg')  no-repeat scroll 50% 50% / 133% auto transparent",
						""
					]).join("!important;"));
					link.appendChild(shield);
					link.appendChild(infoBar);
				} else {
					link.setAttribute("style", o.main.styles);
					shield.innerHTML = "&nbsp;";
					link.appendChild(shield);
				}
				return link;
			};
		}()),
		linkClickHandler = function (event) {
			var link = event.currentTarget;
			if (link.nodeName === "A") {
				link = link.querySelector("span");
			}
			link.style.setProperty("background-color", "rgba(0,0,0,0.6)", "important");
		},
		init = function (dynamicNodes, done) {
			var nowNum = Date.now(),
				risky = !dynamicNodes ? document.querySelectorAll(riskyTags.join(", ")) : dynamicNodes,
				badElements = [],
				selector,
				paramParent,
				videoLink,
				riskyNode,
				riskyAttributes,
				fauxLink,
				videoId,
				linkHolder;
			if (risky.length === 0) return;
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
							"videoId": videoId[1]
						});
						break;
					}
				}
			}
			if (badElements.length === 0) return;
			// Create hidden placeholder
			linkHolder = document.createElement("DIV");
			linkHolder.style.setProperty("display", "none", "important");
			linkHolder.setAttribute("hidden", true);
			linkHolder.dataset.cyetoilPlaceholder = nowNum+"";
			badElements.forEach(function (el) {
				var content;
				// This prevents collisions, and PARAMs inside OBJECTs from duplicating
				if (loadedPatt.test(el.node.dataset.cyetoil+"")) return;
				replCounter += 1;
				// Copy all styles that the original video element had
				el = makeStyles(el, "main");
				// Skip pseudo styles if (not or) content is <none>
				if ((content=copyAllStyles(el.node, ":before", "content")) && content[1] !== "none") {
					el = makeStyles(el, "before", [nowNum, replCounter]);
					// console.log(content, el.before.styleTagContent);
				}
				if ((content=copyAllStyles(el.node, ":after", "content")) && content[1] !== "none") {
					el = makeStyles(el, "after", [nowNum, replCounter]);
				}
				videoLink = makeImageAnchor(el);
				el.node.setAttribute("data-cyetoil", "loaded"+nowNum);
				videoLink.setAttribute("data-cyetoil", "loaded"+nowNum);
				el.node.setAttribute("data-cyetoil-uid", replCounter+"org");
				videoLink.setAttribute("data-cyetoil-uid", replCounter+"");
				videoLink.onmouseup = linkClickHandler;
				// Dump in placeholder
				linkHolder.appendChild(videoLink);
			});
			// Replace after collecting to preserve css styles
			// Reason: Example: Removing any element causes rules such as :nth-of-type(x) to change
			document.body.appendChild(linkHolder);
			selector = "[data-cyetoil='loaded"+nowNum+"'][data-cyetoil-uid]";
			makeArray(linkHolder.querySelectorAll(selector)).forEach(function (node) {
				var moved = node.parentNode.removeChild(node), // Remove AND copy it
					old = document.querySelector("[data-cyetoil-uid='"+(moved.dataset.cyetoilUid)+"org']");
				old.parentNode.replaceChild(moved, old);
			});
			// Clean up
			linkHolder.parentNode.removeChild(linkHolder);
			if (typeof done === "function") {
				return done();
			}
		};
	// Start
	if (youtubeDomainPatt.test(document.location.hostname)) {
		if (top.window != self.window
			// Are we inside a Youtube IFRAME embed?
			&& (insideIframeId=(document.location.pathname+document.location.search).match(youtubeIdPatt)) !== null) {
			// 2015-05-05 Make sure we're not an iframe on youtube.com, it _can_ happen
			try { if (top.window.document.domain === "www.youtube.com") return; } catch (err) {}
			(function () {
				var iframeFlashvars = "",
					iframeStats,
					pageTitle = document.title,
					insideIframeLink,
					iframeHtml,
					formatVideoLength = function (n, isMs) {
						n = Number(n);
						if (isMs) {
							n = (n/1000).toFixed(0);
						}
						var sForm = (n%60),
							hours = "",
							minutes = ((n-sForm)/60),
							seconds = sForm < 10 ? "0"+sForm : sForm;
						if (minutes > 60) {
							hours = ((minutes-(minutes%60))/60)+".";
							minutes = (minutes%60);
							if (minutes < 10) {
								minutes = "0"+minutes;
							}
						}
						return hours+minutes+":"+seconds;
					};
				makeArray(document.querySelectorAll("div")).forEach(function (node) {
					iframeFlashvars += (node.outerHTML || "");
				});
				if (!iframeFlashvars || iframeFlashvars.indexOf("flashvars=") === -1) {
					// Probably HTML5 player
					iframeFlashvars = document.body.textContent;
					iframeStats = {
						"views": iframeFlashvars.match(/view_count\D*?(\d+)/),
						"time": iframeFlashvars.match(/length_seconds\D*?(\d+)/)
					};
				} else {
					// Probably not the HTML5 Player
					iframeStats = {
						"views": iframeFlashvars.match(/flashvars=.+?view_count=(\d+)/),
						"time": iframeFlashvars.match(/flashvars=.+?length_seconds=(\d+)/)
					};
				}
				if (iframeStats.views) {
					iframeStats.views = (iframeStats.views[1]
						.replace(/^(\d+)(\d{3})(\d{3})$/, "$1.$2,$3")
						.replace(/^(\d+)(\d{3})$/, "$1,$2"))+" views";
				}
				if (iframeStats.time) {
					iframeStats.time = formatVideoLength(iframeStats.time[1]);
				}
				if (!iframeStats.time && !iframeStats.views && document.querySelector("#player-unavailable")) {
					// Private or removed video
					pageTitle = "Unavailable / Private / Removed - YouTube";
				}
				insideIframeLink = makeImageAnchor({
					"stats": iframeStats,
					"videoId": insideIframeId[1],
					"atitle": pageTitle.trim() /*.replace(/(?:\s|-)+Youtube$/i, "")*/
				}, true);
				iframeHtml = getIframeTmpl(pageTitle, insideIframeLink.outerHTML).join("");
				// 2015-02-14 00:35 Removed base64 encoding which I used to safeguard the uri, but
				// a bug in firefox makes it break for non ascii characters
				// https://bugzilla.mozilla.org/show_bug.cgi?id=213047
				document.location.replace("data:text/html;utf8,"+encodeURIComponent(iframeHtml));
			}());
		}
	} else {
		window.addEventListener("load", function () {
			// Continue looking for OBJECTs and EMBEDs with Youtube videos
			MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
			// https://developer.mozilla.org/en/docs/Web/API/MutationObserver
			// https://dev.opera.com/articles/mutation-observers-tutorial/
			observer = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation) {
					var nodes = [];
					if (!mutation.addedNodes || mutation.addedNodes.length === 0) return;
					makeArray(mutation.addedNodes).forEach(function (node) {
						if (node.nodeName && riskyTags.indexOf(node.nodeName.toLowerCase()) !== -1) {
							nodes.push(node);
							makeArray(node.querySelectorAll("*")).forEach(function (child) {
								// Add all nodes inside the new one
								nodes.push(child);
							});
							setTimeout(function () {
								// Allow OBJECTs and EMBEDs to reflow the document
								init(nodes);
							}, 200);
						}
					});
				});
			});
			init(null, function () {
				observer.observe(document.body, {
					childList: true,
					subtree: true,
					attributes: false,
					characterData: false
				});
			});
		});
	}
}());
