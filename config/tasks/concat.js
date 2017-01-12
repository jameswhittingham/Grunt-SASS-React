var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config')();
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

/* Concat JS and CSS - reference index.html */
gulp.task('concat', function (done) {
	gulp.src('app/*.html')
	.pipe(useref())
	.pipe(gulpif('*.js', uglify({ mangle: false })))
	.pipe(gulpif('*.css', cssnano()))
	.pipe(gulp.dest(config.build.path))
	.on('finish', done);
});