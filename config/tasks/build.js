var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config')();

/* Main build task */
gulp.task('build', function (done) {
	runSequence('clean-build', ['build-assets']);
});

/* Build production files into build folder */
gulp.task('build-assets', function (done) {
	process.env.NODE_ENV = 'production';
	return runSequence('build-everything');
});

gulp.task('build-everything', function (done) {
	return runSequence('concat', ['sass-build','copy','scripts-build','image-min','cache-bust'], function(){
		return runSequence('html-min', function(){
			console.log('DONE');
			process.exit();
		});
	});
});