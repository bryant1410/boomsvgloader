// Load plugins
var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    duration     = require('gulp-duration'),
    ghpages      = require('gulp-gh-pages'),
    header       = require("gulp-header"),
    merge        = require("merge-stream"),
    pkg          = require('./package.json'),
    reload       = browserSync.reload,
    rename       = require("gulp-rename"),
    uglify       = require('gulp-uglify');


var banner = "/*! <%= pkg.title %> <%= pkg.version %> | <%= pkg.homepage %> | (c) 2015 BoomTown | MIT License */\n";


// Path Variables
var paths =  {
  'html': {
    'src': 'dist/*.html'
  },
  "js": {
    "src": "src/js/*.js",
    "dist": "dist/js/"
  }
};

// Javascript
gulp.task('js', function() {
  var uncompressed = gulp.src(paths.js.src)
    .pipe(header(banner, { pkg : pkg }))
    .pipe(gulp.dest(paths.js.dist))
    .pipe(reload({stream:true}));

  var compressed = gulp.src(paths.js.src)
    .pipe(uglify())
    .pipe(header(banner, { pkg : pkg }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(gulp.dest(paths.js.dist))
    .pipe(reload({stream:true}));

  return merge(uncompressed, compressed);
});


// Watch
gulp.task('watch', function() {
  gulp.watch(paths.js.src, ['js']);
});


// Server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './dist'
    }
  });
});


// Gulp Default
gulp.task('default', ['js']);

// Gulp Server
gulp.task('server', ['default', 'watch', 'browser-sync'], function () {
    gulp.watch([paths.html.src], reload);
});









