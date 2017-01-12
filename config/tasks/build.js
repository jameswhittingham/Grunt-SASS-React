var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config')();

/* Main build task */
gulp.task('build', function (done) {
	runSequence('clean-build', ['build-assets']);
});

/* Build production files into build folder */
gulp.task('build-assets', function (done) {
	runSequence('concat', ['sass','minify','copy-assets-build','image-min','cache-bust']);
});

/* Copy assets to build folder */
gulp.task('copy-assets-build', function (done) {
	// Copy HTML Includes
	gulp.src([config.app + 'includes/*.html',config.app + 'templates/*.html'], {
		base: config.app
	})
	.pipe(gulp.dest(config.build.path));
	
	// Copy assets
	gulp.src(config.assets + '**/*.*', {
		base: config.assets
	})
	.pipe(gulp.dest(config.build.assetPath.base));

	// Copy data
	gulp.src(config.assetsPath.data + '**/*.*', {
		base: config.assetsPath.data
	})
	.pipe(gulp.dest(config.build.data));
});