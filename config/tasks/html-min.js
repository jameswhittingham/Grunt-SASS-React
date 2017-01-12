var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config')();
var htmlmin = require('gulp-htmlmin');

/* Minify HTML */
gulp.task('html-min', function (done) {
	gulp.src('app/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest(config.build.path));
});