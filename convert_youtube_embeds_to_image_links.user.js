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
// @exclude      http*://youtu.be/*
// @exclude      http*://*.youtu.be/*
// @exclude      http*://*.ytimg.com/*
// @grant        none
// ==/UserScript==

/*
	Example webpage(s)
	--------------------------------------------------------------------------------------------------------
	http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/cye2il-demo/
	http://terrillthompson.com/tests/youtube.html
	http://www.rottentomatoes.com/m/tv_editorial/news/1931451/11_tv_shows_cancelled_after_the_first_episode/
	--------------------------------------------------------------------------------------------------------
*/

// Change iframesLinkTarget / nonIframesLinkTarget to "_blank" if you want to open the videos in a new window
(function () {
	"use strict";
	var ytWatchBaseHref = "https://www.youtube.com/watch?v=",
		riskyTags = ["object", "param", "embed"],
		youtubeIdPatt = /(?:\/v\/|\?v=|\/embed\/)([a-zA-Z0-9_\-]{11})/,
		iframesLinkTarget = "_top",
		nonIframesLinkTarget = "_self",
		loadedPatt = /^loaded\d{13}$/,
		insertedObjectLinks = 0,
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
		getIframeTmpl = function (docTitle, th) {
			return [
				"<!DOCTYPE html>\n"+
				"<html style=\"margin:0 !important;padding:0 !important;overflow:hidden !important;\">\n"+
				"<head>\n"+
				"<meta charset=\"utf-8\">\n"+
				"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n"+
				"<title>"+docTitle+"</title>\n"+
				"</head>\n"+
				"<body style=\"margin:0 !important;padding:0 !important;background:#FFF;overflow:hidden !important;\">\n",
				th,
				"</body>\n"+
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
		makeStyles = function (o, cs, type) {
			type = type.replace(/:/g, "");
			o[type] = o[type] || {};
			o[type].content = cs.getPropertyValue("content");
			o[type].margin = getShortHandStyle(o.node, "margin");
			o[type].padding = getShortHandStyle(o.node, "padding");
			o[type].border = getShortHandStyle(o.node, "border");
			o[type].box = getShortHandStyle(o.node, "box");
			o[type].min = getShortHandStyle(o.node, "min");
			o[type].max = getShortHandStyle(o.node, "max");
			o[type].float = cs.getPropertyValue("float");
			o[type].clear = cs.getPropertyValue("clear");
			o[type].display = cs.getPropertyValue("display");
			o[type].position = cs.getPropertyValue("position");
			o[type].zIndex = cs.getPropertyValue("z-index");
			o[type].verticalAlign = cs.getPropertyValue("vertical-align");
			o[type].top = addPx(cs.getPropertyValue("top"));
			o[type].bottom = addPx(cs.getPropertyValue("bottom"));
			o[type].left = addPx(cs.getPropertyValue("left"));
			o[type].right = addPx(cs.getPropertyValue("right"));
			o[type].width = getDim(cs, o.node, "width");
			o[type].height = getDim(cs, o.node, "height");
			return o;
		},
		getDim = function (cs, el, y) {
			var clientDim = "client"+(y[0].toUpperCase())+(y.substr(1));
			y = cs.getPropertyValue(y) || el[y] || el[clientDim] || "auto";
			return addPx(y);
		},
		compileBaseStyles = function (a, o) {
			return (
				a.concat(genShorthandCssStyles(o.border))
				.concat(genShorthandCssStyles(o.box))
				.concat(genShorthandCssStyles(o.min))
				.concat(genShorthandCssStyles(o.max))
				.concat(genShorthandCssStyles(o.margin))
				.concat(genShorthandCssStyles(o.padding))
			);
		},
		makeImageAnchor = function (o, isIframe) {
			var url = ytWatchBaseHref+o.videoId,
				link = document.createElement("A"),
				span = document.createElement("SPAN"),
				style,
				banner,
				linkCss = [],
				spanCss = [];
			link.href = url;
			link.title = (o.atitle ? o.atitle+" - "+o.videoId : url);
			link.setAttribute("onmouseup", "this.querySelector('span').style.backgroundColor='rgba(0,0,0,0.6)';"+
				"this.querySelector('span').style.opacity='1';");
			linkCss = linkCss.concat([
				"background:url('https://i.ytimg.com/vi/"+o.videoId+"/0.jpg')  no-repeat scroll 50% 50% / 133% auto transparent"
			]);
			if (isIframe) {
				banner = document.createElement("I");
				banner.textContent = (o.stats.time ? o.stats.time+"  " : "")+link.title+
					(o.stats.views ? " - "+o.stats.views : "");
				link.title = banner.textContent;
				banner.style.cssText = ([
					"position: absolute",
					"bottom: 0",
					"left: 0",
					"height: 30px",
					"width: 100%",
					"box-sizing: border-box",
					"padding: 8px 0px 0px 12px",
					"text-shadow: 0 1px 0 #000000",
					"font: 13px/1 sans-serif",
					"color: rgba(255,255,255,0.8)",
					"background-color: rgba(0,0,0,0.88)",
					"overflow: hidden",
					"white-space: nowrap",
					"text-overflow: ellipsis",
					"border-bottom: 1px solid #000000"
				]).concat([""]).join(" !important; ");
				link.target = iframesLinkTarget;
				spanCss = spanCss.concat([
					"margin: 0",
					"padding: 0",
					"background: url('"+youtubeIcon+"') no-repeat scroll 50% 50% / 16% auto rgba(0,0,0,0.08)"
				]);
				linkCss = linkCss.concat([
					"margin: 0",
					"padding: 0",
					"position: absolute",
					"top: 0",
					"bottom: 0",
					"left: 0",
					"right: 0"
				]);
			} else {
				if (o.before) {
					style = style || document.createElement("STYLE");
					o.before.styles = compileBaseStyles([], o.before);
					o.before.styles = o.before.styles.concat([
						"float: "+(o.before.float||"none"),
						"z-index: "+o.before.zIndex,
						"vertical-align: "+o.before.verticalAlign,
						"top: "+o.before.top,
						"bottom: "+o.before.bottom,
						"left: "+o.before.left,
						"right: "+o.before.right,
						"position: "+o.before.position,
						"display: "+o.before.display,
						"width: "+o.before.width,
						"height: "+o.before.height
					]);
					style.textContent = o.before.selector+" {\n"+(
						o.before.styles.filter(function (s) {
							s = s.trim();
							return !!s;
						}).concat([""]).join(" !important;\n")
					)+"\n}\n";
					document.querySelector("head").appendChild(style)
				}
				/*compileBaseStyles(linkCss, o.after);*/
				link.target = nonIframesLinkTarget;
				linkCss = compileBaseStyles(linkCss, o.main).concat([
					"float: "+(o.main.float||"none"),
					"z-index: "+o.main.zIndex,
					"vertical-align: "+o.main.verticalAlign,
					"top: "+o.main.top,
					"bottom: "+o.main.bottom,
					"left: "+o.main.left,
					"right: "+o.main.right,
					"position: "+(o.main.position !== "absolute" ? "relative" : o.main.position),
					"display: "+(!/^(?:block|none)$/.test(o.main.display) ? "inline-block" : o.main.display),
					// Must have an actual size - default will assume a 16:9 resolution
					"width: "+(o.main.width === "auto" || o.main.width === "0px" ? "320px" : o.main.width),
					"height: "+(o.main.height === "auto" || o.main.height === "0px" ?
						(o.main.width !== "auto" && o.main.width !== "0px" ? Math.ceil((parseInt(o.main.width, 10)/16)*9) : "180")+
						"px" : o.main.height)
				]);
				spanCss = spanCss.concat([
					"background: url('"+youtubeIcon+"') no-repeat scroll 50% 50% / 16% auto rgba(0,0,0,0.08)"
				]);
			}
			spanCss = spanCss.concat([
				"opacity: 0.85",
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
			if (banner) {
				span.appendChild(banner);
			} else {
				span.innerHTML = "&nbsp;";
			}
			link.appendChild(span);
			return link;
		},
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
				var computedStyle;
				// This prevents collisions, and PARAMs inside OBJECTs from duplicating
				if (loadedPatt.test(el.node.dataset.cyetoil+"")) return;
				insertedObjectLinks += 1;
				// Copy all (common) styles that the video has
				computedStyle = window.getComputedStyle(el.node, "main");
				el = makeStyles(el, computedStyle, "main");
				// Skip pseudo styles if (not or) content is <none> - keep adding to the same object
				computedStyle = window.getComputedStyle(el.node, ":before");
				if (computedStyle.getPropertyValue("content") !== "none") {
					el = makeStyles(el, computedStyle, ":before");
					el.before.selector = "a[data-cyetoil='loaded"+nowNum+"'][data-cyetoil-uid='"+
						insertedObjectLinks+"']:before";
				}
				computedStyle = window.getComputedStyle(el.node, ":after");
				if (computedStyle.getPropertyValue("content") !== "none") {
					el = makeStyles(el, computedStyle, ":after");
					el.after.selector = "a[data-cyetoil='loaded"+nowNum+"'][data-cyetoil-uid='"+
						insertedObjectLinks+"']:after";
				}
				videoLink = makeImageAnchor(el);
				el.node.setAttribute("data-cyetoil", "loaded"+nowNum);
				videoLink.setAttribute("data-cyetoil", "loaded"+nowNum);
				el.node.setAttribute("data-cyetoil-uid", insertedObjectLinks+"org");
				videoLink.setAttribute("data-cyetoil-uid", insertedObjectLinks+"");
				videoLink.onmouseup = linkClickHandler;
				// Dump in placeholder
				linkHolder.appendChild(videoLink);
			});
			// Replace after collecting to preserve css styles
			document.body.appendChild(linkHolder);
			selector = "[data-cyetoil='loaded"+nowNum+"'][data-cyetoil-uid]";
			makeArray(linkHolder.querySelectorAll(selector)).forEach(function (node) {
				var moved = node.parentNode.removeChild(node),
					old = document.querySelector("[data-cyetoil-uid='"+(moved.dataset.cyetoilUid)+"org']");
				old.parentNode.replaceChild(moved, old);
			});
			// Clean up
			linkHolder.parentNode.removeChild(linkHolder);
		};
	// Start
	if (/^(?:(?:[a-zA-Z0-9\-]+\.)?youtube(?:\-nocookie)?\.com)$/.test(document.location.hostname)) {
		if (top.window != self.window
			&& (insideIframeId=(document.location.pathname+document.location.search).match(youtubeIdPatt)) !== null) {
			// We're inside a Youtube IFRAME embed
			(function () {
				var iframeFlashvars = "",
					iframeStats,
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
				insideIframeLink = makeImageAnchor({
					"stats": iframeStats,
					"videoId": insideIframeId[1],
					"atitle": document.title.trim() /*.replace(/(?:\s|-)+Youtube$/i, "")*/
				}, true);
				iframeHtml = getIframeTmpl(document.title, insideIframeLink.outerHTML).join("");
				document.location.replace("data:text/html;base64,"+window.btoa(iframeHtml));
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
