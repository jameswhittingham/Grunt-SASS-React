var gulp = require('gulp');
var config = require('../config')();
var gulpif = require('gulp-if');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
    return buildScript('index.js');
});

function buildScript(file) {
    var props = {entries: [config.assetsPath.scripts + file], debug: true};
    var bundler = browserify(props);
    bundler = watchify(bundler);
    bundler.transform(babelify);

    bundler.on('update', rebundle);

    function rebundle() {
	    var stream = bundler.bundle();

	    return stream.on('error', handleErrors)
        .pipe(source(file))
        //.pipe(gulpif(true, streamify(uglify())))
	    .pipe(streamify(rename({
	      basename: 'main'
	    })))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.build.assetPath.scripts));
    }

    return rebundle();
}

function handleErrors(err) {
	console.log(err)
}