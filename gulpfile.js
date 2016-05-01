var concat = require('gulp-concat');
var del = require('del');
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');


var paths = {
    config: 'config/config.json',
    css: 'src/client/css/**/*.css',
    images: 'src/client/images/**/*',
    views: 'src/client/views/**/*'
};

/**
 * Remove build and dist directory
 */
gulp.task('clean', function() {
    return del(['build', 'dist']);
});

/**
 * Run webpack config creating bundle in build directory
 */
gulp.task("webpack", function(callback) {

    webpack( webpackConfig , function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

/**
 * Concat css files to build directory with webpack bundle
 */
gulp.task('concat-css', function() {
    return gulp.src(paths.css)
        .pipe(concat('app.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['clean', 'webpack', 'concat-css']);