# Install as UserScript

You can find and install it from any of these repositories:
* [https://openuserjs.org/scripts/elundmark/Convert_Youtube_Embeds_to_Image_Links](https://openuserjs.org/scripts/elundmark/Convert_Youtube_Embeds_to_Image_Links)
* [https://monkeyguts.com/code.php?id=681](https://monkeyguts.com/code.php?id=681)
* [https://greasyfork.org/en/scripts/7096-convert-youtube-embeds-to-image-links](https://greasyfork.org/en/scripts/7096-convert-youtube-embeds-to-image-links)

# Applies to all websites

* Exceptions:
  - `http*://*.ytimg.com/*`
  - `http*://*.youtu.be/*`
  - `http*://youtu.be/*`
  - Also note that no action is taken on Youtube's own website.

# About

* Replaces _all_ embedded Youtube videos with a simple thumbnail and link.
* This userscript is based on [Stop Overzealous Embedding](https://openuserjs.org/scripts/ConnorBehan/Stop_Overzealous_Embedding) but is rewritten to instead change the _content_ of the iframe to a thumbnail and a link, which looks just like the video itself. This means it will keep the same CSS styling, provided it's an `iframe` element and not an `object` or `embed`.
  - If it is an `object` or `embed` tag, they are replaced with a linked image, and _tries_ to look like the video by copying (most of) it's CSS styles.
* All videolinks will open in the same window, but if the prefer it to open in a new tab you need to change `iframesLinkTarget` and/or `nonIframesLinkTarget` in the sourcecode to `"_blank"`.

## Requires HTML5 support:

 * `iframe[srcdoc]` [#ref](https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe)
 * `window.btoa` [#ref](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64.btoa)

_Require Secure Updates_ must be disabled to enable auto-updates.

**Original script and author** [Stop Overzealous Embedding](https://openuserjs.org/scripts/ConnorBehan/Stop_Overzealous_Embedding) by [Connor Behan](https://openuserjs.org/scripts/ConnorBehan/).

**Script released under** [MIT License](http://opensource.org/licenses/MIT)

**Icons by** [Pixel Bazaar](https://www.iconfinder.com/zlaten)

# Demo

* Remember, this demo needs the userscript installed to work!
* [http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/cye2il-demo/](http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/cye2il-demo/)

![screenshot of demo](http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/cye2il-demo/screenshot.png "Screenshot of the demo page")

### Copyright (c) 2014 Erik Lundmark <mail@elundmark.se>, openuserjs.org/scripts/ConnorBehan/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
