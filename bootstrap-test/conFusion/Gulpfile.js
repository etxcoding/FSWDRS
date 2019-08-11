'use strict'; // Use Javascript.

// Declaqre gulp modules.
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

// Create task in charge of converting scss files to css files.
gulp.task('sass', function() {
    return gulp.src('./css/*.scss')             // Get files from source directory.
    .pipe(sass()).on('error', sass.logError)    // Apply function to files.
    .pipe(gulp.dest('./css'));                  // Throw files on destination directory.
});

// Create task in charge of listening to any changes on scsss files and then call the sass task.
gulp.task('sass:watch', function() {
    gulp.watch('./css/*.scss', gulp.series('sass'));
});

// Create task in charge of listening to any change in files indicated in order to reload the server.
gulp.task('browser-sync', function() {

    // Declare files to listen to.
    var files = [
        './*.html',
        './css/*.css',
        './js/*.js',
        './img/*.{png,jpg,gif}',
    ];

    // Initialize browser sync indicating the files.
    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});

// Create task in charge of run everything.
gulp.task('default', gulp.parallel('browser-sync', 'sass:watch')); // It should be series instead of parallel, not really sure why it works though