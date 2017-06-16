v2.0.0
==================
* upgraded to vis 2.0.0
* Includes highlight components for optional crosshair
* Includes Web workers:
  * for scale calculations
  * for quadtree calculations
* New marker next to timestamp indicating which series the timestamp corresponds to.
* Internationalization support
* Breaking changes:
  * Default toolipData search now shows all series data at the closest timestamp
    * To use the old behavior of closest data values regardless of their timestamp, set "interactionSpaceConfig.searchType" to "pointPerSeries"
  * Defaults to using web workers
    * Use "preventWebWorkerSynchronization" to disable web worker. Will not be able to use quadtree or crosshair features.
  * Moved svg layers around



v1.1.1
==================
* removed cleanOnDetached

1.1.0
==================
* upgraded to vis 1.1.0
* added canvas support (renderToCanvas)
* progressive rendering can be customized through progressiveRenderingPointsPerFrame (16000 by default for lines, 2000 byy default for scatter) and progressiveRenderingMinimumFrames. Increase progressiveRenderingPointsPerFrame for better performance and decrease for smoother drawing. When at the right value no performance cost incurs and drawing is smooth but if value is too small can incur a performance cost (i.e the drawing will take longer but will still start at the same time, also the UI won't be frozen)
* added cleanOnDetached to allow reuse of the chart after detaching it from the dom. This is aimed at applications creating charts dynamically so that they can keep a pool of charts (simple array of charts) when removing them from the dom and reusing them later on with new data and config, improving performance . Turning cleanOnDetached on will make sure the chart will clear everything needed so that it draws properly with any new config. If using this strategy one thing to keep in mind is making sure the chart is re-appended in the dom *before* changing its properties to their new values. In most cases it would work even if appending it after, but some edge cases scenarios might fail to clean some visual artifact (for example switching from canvas to svg while deleting a few series at the same time). When moving the chart around the dom do not turn it on for performance boost and making sure you don't need the chart to force redrawing. This can be changed dynamically
* added debounceResizeTiming to control the debounce timiong on auto resize, changed default from 50ms to 250ms

1.0.0
==================
* modified internal mechanism for resizing
* added preventResize
* added chartHorizontalAlignment and chartVerticalAlignment to alignt the chart drawing when smaller than its container
* alignment of the chart is now centered by default
* Added layers
* Changed line to line-svg
* Added gridlines
* added dynamic menus on registers
* Added toolbar, advanced zooming and panning
* Multi-y
* changing ghp.sh to account for Alpha releases
* fix resize timing issue
* ensure selectionType works

v0.3.1
==================
* Themeable

v0.3.0
==================
* Updated dependencies

v0.2.17
==================
* Ensure zoom button reposition on resize
* Ensure zoom is reset when changing chart data
* Zoom is now preserved when chart is resizing

v0.2.16
==================
* Use vis 0.7.0

v0.2.15
==================
* Fixed height resizing issue that crept back in

v0.2.14
==================
* changing all devDeps to ^

v0.2.13
==================
* Update px-theme to 2.0.1 and update test fixtures

v0.2.12
==================
* update dependencies for dropdown

v0.2.11
==================
* removing px-theme style call

v0.2.10
==================
* changing Gruntfile.js to gulpfile.js

v0.2.9
==================
* bower updating px-demo-snippet

v0.2.8
==================
* ensure tooltip config is passed down even when tooltip was disabled

v0.2.7
==================
* fixed codepen

v0.2.6
==================
* Added key series, added links to demo snippet

v0.2.5
==================
* Update dependencies

v0.2.4
==================
* restamp on scatter and lines dom-if

v0.2.3
==================
* fix height resizing issue

v0.2.2
==================
* make sure addition/removal of series to seriesConfig are correctly processed

v0.2.1
==================
* Added math.max check to width and height

v0.2.0
==================
* moved to px-vis 0.0.6
* ensure muted series are muted in tooltip

v0.1.3
==================
* fix clip path and axis title redraw

v0.1.2
==================
* use latest version of px-vis

v0.1.1
==================
* Changed hideTooltip to showTooltip, tooltip is off by default. Fixed axis error

v0.0.17
==================
* Add bower resolution for tooltip

v0.0.16
==================
* fix typo on bower.json

v0.0.15
==================
* Bump px-vis to 0.3.X

v0.0.14
==================
* adding integration with navigator

v0.0.13
==================
* use new tooltip

v0.0.12
==================
* update to px-vis 2.0

v0.0.11
==================
* fixed demo page for IE

v0.0.10
==================
* added overflow to demoContainer and removed flex__wrap from mega-demo

v0.0.9
==================
* adding feature to export chart to image

v0.0.9
==================
* adding feature to export chart to image

v0.0.8
==================
* updated mega demo styles and bower px-demo-snippet to ^

v0.0.7
==================
* fixed typo in the gh-pages script that was breaking the build, and fixed width on api container

v0.0.6
==================
* removed watch, added view on github

v0.0.5
==================
* Added vulcanize index and demo

v0.0.4
==================
* Make demo smaller

v0.0.3
==================
* Change demo data and add interactive demo

v0.0.1
==================
* Initial release
