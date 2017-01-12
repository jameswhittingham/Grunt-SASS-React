var gulp = require('gulp');
var config = require('../config')();

/* Copy assets to build folder */
gulp.task('copy', function (done) {
	/* Copy HTML */
	gulp.src([config.app + 'index.html',config.app + 'index.html'], {
		base: config.app
	})
	.pipe(gulp.dest(config.build.path));
	
	// Copy data
	gulp.src(config.assetsPath.data + '**/*.*', {
		base: config.assetsPath.data
	})
	.pipe(gulp.dest(config.build.data));

	// Copy assets
	return gulp.src(config.assets + '**/*.*', {
		base: config.assets
	})
	.pipe(gulp.dest(config.build.assetPath.base));

	
});