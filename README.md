# BoomSVGLoader

BoomSVGLoader is an AJAX solution for your SVG sprite.

This plugin simply loads your compiled SVG sprite into the page immediately after the opening <code>&lt;body&gt;</code> tag. The SVG sprite is wrapped in a visually hidden <code>&lt;div&gt;</code>. Original technique explained on [CSS Tricks](https://css-tricks.com/ajaxing-svg-sprite/).

[Simple Demo](http://boomtownroi.github.io/boomsvgloader/)


## Installation

There's a few options to get up and running with BoomSVGLoader:

* Download the [latest release](https://github.com/boomtownroi/boomsvgloader/releases/latest)
* Clone the repo, `git clone git://github.com/boomtownroi/boomsvgloader.git`
* Install with [Bower](http://bower.io): `bower install boomsvgloader --save`
* Install with [npm](https://www.npmjs.com/package/boomsvgloader): `npm install boomsvgloader`


## Usage

1. BoomSVGLoader JS files are in the [dist/](https://github.com/boomtownroi/boomsvgloader/tree/master/dist) folder. Either add it to your script bundle build process or load it directly in the page.

	`<script src='js/boomsvgloader.min.js'></script>`

1. Call BoomSVGLoader's load function with the path to your SVG sprite.

	`boomsvgloader.load('/path/to/your/sprite.svg')`

1. Use your SVGs! The name after the # should match a symbol ID inside of your SVG sprite.

	`<svg><use xlink:href="#heart"/></svg>`


## Versioning

BoomSVGLoader is maintained by using the [Semantic Versioning Specification (SemVer)](http://semver.org/)


## Copyright and License

Copyright 2015 [BoomTown](http://boomtownroi.com) under the [MIT License](https://github.com/BoomTownROI/boomsvgloader/blob/master/LICENSE.md)