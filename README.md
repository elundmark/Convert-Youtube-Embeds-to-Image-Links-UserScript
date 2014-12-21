# Demo

* [http://jsfiddle.net/qo7tebr5/3/](http://jsfiddle.net/qo7tebr5/3/)
* Due to security on jsfiddle.net you might not be able to click the link, so right-click to open instead...

# Applies to

* All webpages, except `http*://*.youtube.com/*`.

# About

* Replaces _all_ embedded Youtube videos with a simple thumbnail and link.
* This userscript is based on [Stop Overzealous Embedding](https://openuserjs.org/scripts/ConnorBehan/Stop_Overzealous_Embedding) but extends it's functionality to instead change the _content_ of the iframe to a thumbnail and a link, which looks just like the video itself. This means it will keep the same CSS styling, provided it's an `iframe` element and not an `object` or `embed`.
  - If it is an `object` or `embed` tag, they are replaced with a linked image, and _tries_ to look like the video.

## Requires HTML5 support:

 * `iframe[srcdoc]` [#ref](https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe)
 * `window.btoa` [#ref](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64.btoa)

_Require Secure Updates_ must be disabled to enable auto-updates.

**Original script and author** [Stop Overzealous Embedding](https://openuserjs.org/scripts/ConnorBehan/Stop_Overzealous_Embedding) by [Connor Behan](https://openuserjs.org/scripts/ConnorBehan/).
**Script released under** [MIT License](http://opensource.org/licenses/MIT)
**Icons by** [Pixel Bazaar](https://www.iconfinder.com/zlaten)
