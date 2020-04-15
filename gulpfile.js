// Inspiration: https://gist.github.com/trsanders/72d6b4542197f9085f32

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    express = require('express'),
    imagemin = require('gulp-imagemin'),
    imageresize = require('gulp-image-resize'),
    jshint = require('gulp-jshint'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    spawn = require('child_process').spawn,
    uglify = require('gulp-uglify');

var browserSync = require('browser-sync').create();

// Site port and generated directory
var EXPRESS_PORT = 9000;
var EXPRESS_ROOT = '_site/'


// Browsersync
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:5001"
    });
});


// Compile SASS
gulp.task('sass', function () {
  return gulp.src([
      'assets/_scss/*.scss',
      'assets/_scss/*/*.scss'
    ])

    // Turn on source mapping, error logging, and set output format
    .pipe(sass({outputStyle: 'compressed', /* 'sourceComments': 'map',*/ 'errLogToConsole': false}))

    // Destination for processed CSS
    .pipe(gulp.dest('assets/css'))

     // Copy to static dir
    .pipe(gulp.dest('_site/assets/css'));

});


// Lint JS before concatenating and uglifying
gulp.task('lint', function() {
  return gulp.src([
    'assets/scripts/src/project.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// Uglify JS
gulp.task('js', function(){
  return gulp.src([

    // Files to be concatenated and uglified
    'assets/scripts/vendor/jquery-1.10.0.min.js',
    'assets/scripts/vendor/fresco.js',
    'node_modules/masonry-layout/dist/masonry.pkgd.min.js',
    'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
    'assets/scripts/src/svg-png.js',
    'assets/scripts/src/project.js'
  ])
    // Concatenate the src files into a new file
    .pipe(concat('application.min.js'))
    // Uglify the file
    .pipe(uglify())
    // Move final file
    .pipe(gulp.dest('assets/scripts'))
});


// Compress imagery
gulp.task('imagemin', function () {

  // Where to look for images to compress
  return gulp.src([
    'assets/images/*.*',
    'assets/images/*/*.*',
    'assets/images/*/*/*.*'
  ])

  // Compress the images
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran ({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({plugins: [{removeViewBox: false}]})
    ]))

    // Copy compressed images to relevant site build folder
    .pipe(gulp.dest('_site/assets/images'));

});


// Resize and minify photos
gulp.task('photo-resize-and-min', function () {

  // Source for photos to resize
  return gulp.src([
    'assets/images/photos/*/*.*',
    'assets/images/photos/*/*/*.*'
  ])

  // Resize the photos
  .pipe(imageresize({
    width: 1680,
    height: 1680,
    crop: false,
    upscale: false
  }))

  // Minify the photos
  .pipe(imagemin([
    imagemin.jpegtran ({progressive: true})
  ]))

  // Copy resized images to relevant site build folder
  .pipe(gulp.dest('_site/assets/images/photos'));
});


// Resize and minify ticket images
gulp.task('ticket-resize-and-min', function () {

  // Source for photos to resize
  return gulp.src([
    'assets/images/tickets/*.*'
  ])

  // Resize the photos
  .pipe(imageresize({
    width: 1000,
    height: 1000,
    crop: false,
    upscale: false
  }))

  // Minify the photos
  .pipe(imagemin([
    imagemin.jpegtran ({progressive: true})
  ]))

  // Copy resized images to relevant site build folder
  .pipe(gulp.dest('_site/assets/images/tickets'));
});


// Run Jekyll Build Asynchronously
gulp.task('jekyll', function () {
    var jekyll = spawn('jekyll', ['build']);

    jekyll.on('exit', function (code) {
        console.log('-- Finished Jekyll Build: http://localhost:5001 --')
    })
});


// Run static file server
gulp.task('serve', function () {
    var server = express();
    server.use(express.static(EXPRESS_ROOT));
    server.listen(EXPRESS_PORT);
});



// Watch for changes
gulp.task('watch', function () {

    // Manually compile and inject css to avoid jekyll overhead, and utilize livereload injection
    gulp.watch([
      'assets/_scss/*.scss',
      'assets/_scss/*/*.scss'
      ], ['sass']
    );

    // Watch for changes to posts/content files
    gulp.watch("_site/**/**/*.*").on('change', browserSync.reload);

    // // Watch for changes to other files for jekyll compilation
    // gulp.watch([
    //   // Top level
    //   '_config.yml',
    //   '*.html',
    //   '*.md',
    //   // Second level
    //   '*/*.html',
    //   '*/*.md',
    //   // Third level
    //   '*/*/*.html',
    //   '*/*/*.md',
    //   // Ignore changes made to _site folder, else infinite loop
    //   '!_site/**',
    //   '!_site/*/**'
    //   ], ['jekyll']
    // );

    // Watch for changes to JS source files
    gulp.watch('assets/scripts/src/*.js', ['js']);

    // // Watch for changes to images
    // gulp.watch([
    //   'assets/images/*.*',
    //   'assets/images/*/*.*',
    //   'assets/images/*/*/*.*'
    //   ], ['jekyll']);

  })

// Default task for local devlopment
gulp.task('default', ['lint', 'js', 'sass', 'browser-sync', 'watch']);

// Resize and minify photos -- WARNING: will take at least a few mins
gulp.task('photos', ['photo-resize-and-min']);

// Resize and minify ticket images
gulp.task('tickets', ['ticket-resize-and-min']);

// Process work/journal images -- WARNING: ~10 mins
gulp.task('images', ['imagemin']);

// Do eveything but compressing work images (they're probs already compressed) before deploying
// WARNING: will take a few mins to complete
gulp.task('deploy-prep', ['ticket-resize-and-min', 'photo-resize-and-min', 'lint', 'js', 'sass', 'browser-sync', 'watch']);
