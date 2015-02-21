// ==UserScript==
// @name         Convert Youtube Embeds to Image Links
// @description  Tries to turn embedded Youtube videos into thumbnails - this is based on "Stop Overzealous Embedding" https://openuserjs.org/users/ConnorBehan
// @namespace	 http://elundmark.se/code/
// @version      0.2.1
// @date         2015-02-21
// @autor        Erik Lundmark
// @contact      mail@elundmark.se
// @license      MIT; http://opensource.org/licenses/MIT
// @supportURL   https://github.com/elundmark/Convert-Youtube-Embeds-to-Image-Links-UserScript/issues
// @updateURL    http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/convert_youtube_embeds_to_image_links.meta.js
// @downloadURL  http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/convert_youtube_embeds_to_image_links.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA1VBMVEUAAAAAAAAFAQEGAQEHAQEIAQENAgIPAwMVBAQaBQUdBQUeBgYhBwcfCgosCQkyCgo3Cws8DAxADQ1GDg49FBRSEBBdExNhFBRwFxd5GBhAKCh6GRk4MjKMHR2PHR1DPT2nIyOtJCREQ0O2JiatKSm5JibBKCjIKirNKyvPKyvQKyvZLS3aLS3eLS3fLS3gLS3dLi7eLi7fLi7gLi7eLy/fLy/gLy/eNTXhNja0VFTkSkrkS0u5dHTpbW3pbm7vl5fwl5fks7PEv7/2wcH74+P++Pj///+XlX/1AAAAAXRSTlMAQObYZgAABERJREFUeAHtm2mT20QYhF8BCUeAbDh2uckSYGGJNLFm1IT7nv//kyirFrrsidc91UWRD34+pVIVPf0e8uFR4sR/y4kTJ4Zh+H/9W+z0jn/FSu/6V6z0hp9Y6Q0/sdIbfmKlN/zE+Nd330dGBsY55zmPUwKmksqIsWBl/WMqCSjTmOdNmr95fTAS5LdeHHZ4cI0+ntwfWt6dsEEcARnA+bDPvUv08Ojt4RncubjClryJQ4wAcEU/eXBp+5kAWIIQrFxdDESYgtB/co4byuaQHxd3BtJMwfMzAVBijxkr5/T39oB+KcEcO0wA52/0gPM/tgdY5PlzEy1/kyDvB7ji/PUpqH7y3mPcQH9q90+cQr//3tdoW4AtH9Kv90DdP/qvQXY38ImU/1KsX9gj3gn9V7DqJ4kBOhJcK/ULfs4g8yr39SnY/edrwaj3kT3w+88AIPom+vXzHcG4llE/l2B2q3HuHq4A5E3k9Xw/pohYmo3SExj9ZwtKu9NyTUb9fC207mqzfhQGIPoeePWvMIC6B3XglT92/QygJ6iVEe56/W8DKJtYKyPY9TOAvomVCZz6GWBGX4J6g18/A3QlqP9i+MkSE4hyN1Zi9n9l5ivxsU1kAGLWv3YgAWoPGIB49QOZOyD2oO5h1Q+U6P22VRscPxAZRJkCxcTwcwfUKVRCev1kYgCxB/XZ9PrZARCpB/UQXX4SY+fvTvUgHX5SooAoU6i3IPtJChBpCvVW6O/cAb0H9XY++/EpeigBlccvM8Bt/PmzEUDYw3qcP37wAxD65QD1r1+f+gFavx6Ac/AD8DNyX4Cf/ACtXw7w+y/+CNr+6wGGdy79JWz9agD+iuMHoF8OIPyman4iEvxdPYgi7R+R9HoPUoySn2h6+V2xhNZ/ovrVBJEEvxCg+5sBA0h+Iuu1PZgiSfMnul+7FyJL9RNNr/cgZslPJL3egxJJ8hPdL21ijkWffxvgI+eUZ2WJRfKTnXfdb/vPF5oAs9r/JsBv35snXeyA7meAT78zzplIRHT4GWD44HPjtKoJIM6fAYY3rt2TLgaQ/ITfv7yTriaA2tHadNTaRAboqcY6NWsCFPtKRoIlIjZ6/f7JKeGhlXH+Z5y1gcfXi1GFsT0cgV9/91kbiS1u/UYHGcCo30jAw2vDb21i+ifAl0b/rT2IFeCrl4z6jSnwMb6HZz257QRfYGXiYzy4esWvX96Ds0d7D7SBCVy/ss9nDzkBBuAUhP47m0g/9h9mOzPr5x5I/hJkYQ+s+oUErH8OIUHjdzeR/hQ7gAn6/fom0o/YozCB7ecmCvWTwgSEfn8K9I9LEILUJKDf7gH9JcdBZhQmoN/uAf0lzXGMV20/N5G8+cmUOh/vf4F/s8wZmNbn+zcTFpQ8oqQFqZQyAiWVhKVMI0rO8wjktGwLfc37Dwbh0+knpp/Q34nlJ34zfVy/D/3PJSdOnDhx4m//OuSgMioX6QAAAABJRU5ErkJggg==
// @include      *
// @exclude      http*://youtu.be/*
// @exclude      http*://*.youtu.be/*
// @exclude      http*://*.ytimg.com/*
// @grant        none
// ==/UserScript==

/*
	Example webpage(s)
	--------------------------------------------------------------------------------------------------------
	http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/demo/
	http://terrillthompson.com/tests/youtube.html
	http://www.rottentomatoes.com/m/tv_editorial/news/1931451/11_tv_shows_cancelled_after_the_first_episode/
	--------------------------------------------------------------------------------------------------------
*/

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
		// http://commons.wikimedia.org/wiki/File:Youtube_icon.svg
		youtubeIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZ"+
			"HRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLT"+
			"M3My42NDIgLTMxOC4zNDQpIj48cGF0aCBmaWxsPSIjRTVFNUU1IiBkPSJNNTgzLjY2IDMyOC44NUg0MTkuNjI1Yy0xOS4"+
			"2IDAtMzUuNDg3IDE1Ljg4Ny0zNS40ODcgMzUuNDg2VjUyOC4zNWMwIDE5LjYgMTUuODg4IDM1LjQ4NyAzNS40ODcgMzUu"+
			"NDg3aDE2NC4wMzNjMTkuNiAwIDM1LjQ4Ny0xNS44ODggMzcuNDg3LTM0LjgyVjM2NS4wMDVjLTItMjAuMjY2LTE3Ljg4O"+
			"C0zNi4xNTUtMzcuNDg1LTM2LjE1NXoiLz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcG"+
			"FjZU9uVXNlIiB4MT0iLTEzMTMuMTc5IiB5MT0iOTE2LjY4NiIgeDI9Ii0xMzY0Ljg3NiIgeTI9IjEwNjcuMzc1IiBncmF"+
			"kaWVudFRyYW5zZm9ybT0ibWF0cml4KC0uNTkyIDAgMCAuNTkyIC0zMzIuODczIC0yNDcuODk5KSI+PHN0b3Agb2Zmc2V0"+
			"PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpd"+
			"Hk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIG9wYWNpdHk9Ii44MzMiIGZpbGw9InVybCgjYSkiIGVuYWJsZS1iYW"+
			"NrZ3JvdW5kPSJuZXciIGQ9Ik01NTcuMDU2IDMzOC44OTVoLTExMC44M2MtMjkuMzM2IDAtNTIuOTU0IDIzLjgxLTUyLjk"+
			"1NCA1My4zODV2MTA4LjEyNmMuOTUgMjMuMDg4IDQuNjAzIDguNDkyIDExLjU1NS0xNy4wNzQgOC4wOC0yOS43MTMgMzQu"+
			"Mzk2LTU1LjY4MiA2Ni40NDUtNzUuMTQ2IDI0LjQ2LTE0Ljg1NSA1MS44NC0yNC4zNCAxMDEuNjgtMjUuMjQ0IDI4LjI2N"+
			"C0uNTEgMjUuNzctMzYuNjgyLTE1Ljg5Ni00NC4wNDd6Ii8+PGcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyI+PHBhdGggZD"+
			"0iTTQzMy4yOCAzNTMuNzYzaDE1LjMwM2wxLjk3IDcuODggMS42NjcgNS44MTcgMS4zNjQgNS42OTcgMS4zNjQgNS45NCA"+
			"xLjA2IDQuOTdoLjYwN2wxLjA2LTQuOTcgMS4yMTMtNS45NCAxLjUxNS01LjY5NyAxLjUxNS01LjgxOCAyLjEyLTcuODho"+
			"MTQuODVsLTE1Ljc1OCA0Ny4yNzV2MzMuNTc3aC0xNC4wOXYtMzMuNTc3bC0xNS43Ni00Ny4yNzR6TTQ5Ny44MjYgMzczL"+
			"jY0MmMxMS45NyAwIDE4LjAzIDUuNjk3IDE4LjAzIDE2Ljk3djI3Ljg4YzAgMTEuMjczLTYuMDYgMTYuOTctMTguMDMgMT"+
			"YuOTdzLTE4LjAzLTUuNjk3LTE4LjAzLTE2Ljk3di0yNy44OGMwLTExLjI3MiA2LjA2LTE2Ljk3IDE4LjAzLTE2Ljk3em0"+
			"wIDkuNjk4Yy0zLjE4MiAwLTQuODUgMS45NC00Ljg1IDUuNTc2djMxLjI3MmMwIDMuNTE1IDEuODIgNS41NzYgNC44NSA1"+
			"LjU3NiAzLjAzIDAgNC44NS0yLjA2IDQuODUtNS41NzZ2LTMxLjI3MmMtLjAwMi0zLjYzNy0xLjgyLTUuNTc2LTQuODUtN"+
			"S41NzZ6TTU1My40MzMgNDM0LjYxNGwtMS4wNi01LjIxMmMtNS40NTYgNC40ODUtOC42NCA2LjA2LTEyLjQyNyA2LjA2LT"+
			"MuMTgyIDAtNi41MTUtMS40NTQtOC4wMy0zLjM5My0xLjY2Ny0yLjA2Mi0yLjEyLTQuMjQ0LTIuMTItMTAuNDI2VjM3NC4"+
			"zN2gxMy4xODJ2NDYuOTFjMCAzLjAzIDEuMDYgNC40ODYgMy40ODQgNC40ODYgMS42NjggMCAzLjE4My0uNjA2IDUuOTEt"+
			"Mi40MjRWMzc0LjM3aDEzLjE4M3Y2MC4yNDRoLTEyLjEyMnoiLz48L2c+PGxpbmVhckdyYWRpZW50IGlkPSJiIiBncmFka"+
			"WVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjUwMC45MjIiIHkxPSI1NDcuNTA5IiB4Mj0iNTAwLjkyMiIgeTI9Ij"+
			"Q0NS41ODUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzkzMjQyMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1"+
			"jb2xvcj0iI0NCMzIyQyIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTQzNC4zODMgNDQ1"+
			"LjU4NGgxMzMuMDc1YzE5LjYgMCAzNS40ODggMTUuODk2IDM1LjQ4OCAzNS40OTZ2MzAuOTRjMCAxOS42LTE1Ljg5IDM1L"+
			"jQ4OC0zNS40ODggMzUuNDg4SDQzNC4zODNjLTE5LjYgMC0zNS40ODctMTUuODktMzUuNDg3LTM1LjQ4N3YtMzAuOTRjMC"+
			"0xOS42IDE1Ljg4OC0zNS40OTYgMzUuNDg3LTM1LjQ5NnoiLz48L2c+PGcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyIgZml"+
			"sbD0iI2ZmZiI+PHBhdGggZD0iTTU2LjMzNyAxNTAuNDgySDQ0LjM1NHYtOS41ODhoMzcuMzI4djkuNTg4SDY5LjE0N3Y2"+
			"My45MTRoLTEyLjgxdi02My45MTR6TTEwNS4zNzIgMjE0LjM5NmwtLjk2NC00LjczN2MtNC45NTggNC4wNzYtNy44NSA1L"+
			"jUxLTExLjI5NCA1LjUxLTIuODkzIDAtNS45MjMtMS4zMjItNy4zLTMuMDg3LTEuNTE1LTEuODczLTEuOTMtMy44NTYtMS"+
			"45My05LjQ3OHYtNDIuOTc4SDk1Ljg3djQyLjY0NmMwIDIuNzU2Ljk2MyA0LjA3OCAzLjE2NyA0LjA3OCAxLjUxNSAwIDI"+
			"uODkzLS41NSA1LjM3Mi0yLjIwMnYtNDQuNTJoMTEuOTgzdjU0Ljc3aC0xMS4wMnYtLjAwMnpNMTI5LjM0IDE0MC44OTVo"+
			"MTEuOTgzdjIzLjkxNGM0LjY4My00LjE5IDcuODUtNS44NDIgMTEuNDMzLTUuODQyIDIuNzU2IDAgNS43ODUgMS4zMjIgN"+
			"y4xNjIgMy4wODUgMS41MTYgMS45ODMgMS45MyAzLjk3IDEuOTMgOS44MXYzMC40MTNjMCA1LjczLS40MTQgNy43MTUtMS"+
			"45MyA5LjY5Ny0xLjM3NyAxLjg3NS00LjQwNiAzLjE5Ni03LjMgMy4xOTYtMy41ODIgMC02LjYxMi0xLjY1NC0xMS4yOTU"+
			"tNS45NTJ2NS4xOEgxMjkuMzR2LTczLjUwM3ptMTcuMzU1IDY1LjQ2YzIuMjAzIDAgMy4xNjgtMS4zMjMgMy4xNjgtNC4w"+
			"OFYxNzEuODZjMC0yLjg2NC0uOTY1LTQuMDc2LTMuMTY4LTQuMDc2LTEuNTE2IDAtMi44OTQuNTUtNS4zNzIgMi4yMDN2M"+
			"zQuMTYyYzIuNDggMS42NTIgMy44NTcgMi4yMDQgNS4zNzIgMi4yMDR6TTIwNy4xNjMgMTk1LjIyM3YxLjk4M2MuMTM4ID"+
			"EuNDMzLjEzOCAyLjQyNS4xMzggMi45NzYgMCA5LjY5Ny01LjkyMiAxNC45ODctMTYuODA0IDE0Ljk4Ny0xMC4zMyAwLTE"+
			"2LjExNS01LjUxLTE2LjExNS0xNS40M3YtMjUuNDU1YzAtMTAuMzU4IDUuNTEtMTUuMzE3IDE2LjY2Ny0xNS4zMTcgOS45"+
			"MTggMCAxNi4xMTYgNS4xOCAxNi4xMTYgMTMuNjY0djE2LjA5aC0yMC44djEyLjAxYzAgMy45NyAxLjI0IDUuNjIyIDQuN"+
			"DA4IDUuNjIyIDEuNTE3IDAgMi44OTQtLjY2MiAzLjU4LTEuNjUyLjY5LS45OTIuODMtMi4yMDQuODMtNi4xN3YtMy4zMW"+
			"gxMS45ODN6bS0xMS45ODMtMTQuMjE2di05LjI1N2MwLTIuNTM0LTEuNjUyLTMuOTY3LTQuNDA4LTMuOTY3LTIuNzU0IDA"+
			"tNC40MDYgMS40MzMtNC40MDYgMy45Njd2OS4yNTdoOC44MTR6Ii8+PC9nPjwvc3ZnPg==",
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
		init = function (dynamicNodes) {
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
					console.log(content, el.before.styleTagContent);
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
		};
	// Start
	if (youtubeDomainPatt.test(document.location.hostname)) {
		if (top.window != self.window
			&& (insideIframeId=(document.location.pathname+document.location.search).match(youtubeIdPatt)) !== null) {
			// We're inside a Youtube IFRAME embed
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
				console.log(document.body.innerHTML);
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
					pageTitle = "Private / Removed - YouTube";
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
			init();
			observer.observe(document.body, {
				childList: true,
				subtree: true,
				attributes: false,
				characterData: false
			});
		});
	}
}());
