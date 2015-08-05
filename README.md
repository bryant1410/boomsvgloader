#BoomSvgLoader

BoomSvgLoader is an AJAX solutuion for your SVG sprite.

This plugin simply loads your compiled SVG sprite into the page immediately after the opening <code>&lt;body&gt;</code> tag. The SVG sprite is wrapped in a <code>&lt;div&gt;</code> with the display set to 'none'.



[Simple Demo](http://boomtownroi.github.io/boomsvgloader/)


## Installation

There's a few options to get up and running with BoomSvgLoader:

1) Download the [latest release](https://github.com/boomtownroi/boomsvgloader/releases/latest)

	https://github.com/boomtownroi/boomsvgloader/releases/latest

2) Clone the repo 

	git clone git://github.com/boomtownroi/boomsvgloader.git

3) Install with [npm](https://www.npmjs.com/package/boomsvgloader): 

	npm install boomsvgloader



## Usage


1) BoomSvgLoader JS files are in the [dist/](https://github.com/boomtownroi/boomsvgloader/tree/master/dist) folder. Either add it to your script bundle build process or load it directly in the page.

	<script src='js/boomsvgloader.min.js'></script>
	
2) Call BoomSvgLoader's load function with the path to your SVG sprite.

	boomsvgloader.load('sprite.svg');

3) Use your SVGs! The name after the # should match a symbol ID inside of your SVG sprite.

	<svg><use xlink:href="#heart"/></svg>


## Versioning

BoomSvgLoader is maintained by using the [Semantic Versioning Specification (SemVer)](http://semver.org/)


## Copyright and License

Copyright 2015 [BoomTown](http://boomtownroi.com) under the [MIT License](https://github.com/BoomTownROI/boomsvgloader/blob/master/LICENSE.md)





