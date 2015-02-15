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
* Note that no action is taken on Youtube's own website.

# About

* Replaces _all_ embedded Youtube videos with a simple thumbnail and link.
* This userscript is based on [Stop Overzealous Embedding](https://openuserjs.org/scripts/ConnorBehan/Stop_Overzealous_Embedding) but is rewritten to instead change the _content_ of the iframe to a thumbnail and a link, which looks just like the video itself. This means it will keep the same CSS styling, provided it's an `iframe` element and not an `object` or `embed`.
  - If it is an `object` or `embed` tag, they are replaced with a linked image, and _tries_ to look like the video by copying it's CSS styles. Have a look at the [demo](http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/demo/) if you'd like to know how it works.
* All videolinks will open in the same window, but if the prefer it to open in a new tab you need to change `iframesLinkTarget` and/or `nonIframesLinkTarget` in the sourcecode to `"_blank"`.
* `object` and `embed` tags are replaced in-page and monitored if any new are inserted dynamically. `iframe`s are replaced _from within the iframe window_ for security reasons, plus it works faster and takes up less resources.

# Updates

* _Require Secure Updates_ must be disabled to enable auto-updates, unless you install it from a source that rolls their own meta updates, like [monkeyguts.com](https://monkeyguts.com/).

# Development

* Tested in Chromium 40 and Firefox 35.
* I don't test any of my userscripts in Opera anymore, but it should work fine.
* Requires no extra GM_ modules or external resources, just plain javascript.

## Demo

* After you've installed it, have a look at this demo and see what it will look like. This is the page which I test this script against most often, as it has all the weird user cases like ajaxed content, `<object>` and `<embed>` tags, custom css rules and `:after` + `:before` rules.
* [http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/demo/](http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/demo/) ![screenshot of demo](http://elundmark.se/_files/js/convert_youtube_embeds_to_image_links/demo/screenshot.jpg "Screenshot of the demo page")

**Original script and author** [Stop Overzealous Embedding](https://openuserjs.org/scripts/ConnorBehan/Stop_Overzealous_Embedding) by [Connor Behan](https://openuserjs.org/scripts/ConnorBehan/).

**Script released under** [MIT License](http://opensource.org/licenses/MIT)

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
