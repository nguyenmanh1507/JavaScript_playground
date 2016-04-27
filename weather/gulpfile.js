'use strict';

var gulp       = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel      = require('gulp-babel'),
    concat     = require('gulp-concat'),
    plumber    = require('gulp-plumber')
;

gulp.task('compile:js', function() {
  return gulp.src('./src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
  ;
});

gulp.task('default', ['compile:js'], function() {
  gulp.watch('./src/**/*.js', ['compile:js']);
});
