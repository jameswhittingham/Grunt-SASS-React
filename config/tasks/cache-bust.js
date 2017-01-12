var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config')();
var cachebust = require('gulp-cache-bust');

// Cache bust
gulp.task('cache-bust', function (done) {
	gulp.src(config.build.path +'**/*.html')
    .pipe(cachebust({
        type: 'timestamp'
    }))
    .pipe(gulp.dest(config.build.path));
});