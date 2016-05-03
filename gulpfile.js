var concat = require('gulp-concat');
var del = require('del');
var gulp = require("gulp");
var runSequence = require('run-sequence');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');


var paths = {
    config: 'config/config.json',
    css: 'src/client/css/**/*.css',
    images: 'src/client/images/**/*',
    views: 'src/client/views/*'
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
gulp.task("webpack", function() {
    return webpack( webpackConfig )
});

/**
 * Concat css files to build directory with webpack bundle
 */
gulp.task('concat-css', function() {
    return gulp.src(paths.css)
        .pipe(concat('app.css'))
        .pipe(gulp.dest('build'));
});

/**
 * Concat view files to build directory with webpack bundle
 */
gulp.task('concat-views', function() {
    return gulp.src(paths.views)
        .pipe(gulp.dest('dist/client/views'));
});

gulp.task('default', function (callback) {
    runSequence('clean', 'concat-css', 'concat-views', 'webpack', callback);
});
