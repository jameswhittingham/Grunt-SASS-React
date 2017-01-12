var gulp = require('gulp');
var config = require('../config')();
var bs = require("browser-sync");
var runSequence = require('run-sequence');

function startBrowsersync (config)
{
  bsIns = bs.create();
  bsIns.init(config);
  bsIns.reload();
}

/* Default gulp task */
gulp.task('serve', function (done) {
	return runSequence('clean-build', ['init-serve']);
});

gulp.task('init-serve', ['sass', 'copy', 'watch-sass', 'scripts'], function () {

  startBrowsersync({
  	port: 3000,
		server: {
			baseDir: './build/',
			routes: {
				'/node_modules': 'node_modules',
				'/build': 'build'
			}
		},
		files: [
			config.build + 'index.html',
			//config.assetsPath.styles + 'main.css',
			config.build + '**/*.js',
			config.build + '**/*.css',
			config.build + '**/*.html'
		]
	});
  
});