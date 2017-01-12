var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config')();
var imagemin = require('gulp-imagemin');

/* Image Minification */
gulp.task('image-min', function (done) {
    gulp.src(config.assetsPath.images + '**/*')
    .pipe(imagemin())
    .pipe(gulp.dest(config.build.assetPath.images))
});