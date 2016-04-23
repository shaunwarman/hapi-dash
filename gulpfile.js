var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var concat = require('gulp-concat');
var del = require('del');


var paths = {
    css: 'client/css/*.css'
};

/**
 * Remove build directory
 */
gulp.task('clean', function() {
    return del(['build']);
});

/**
 * Run webpack config creating bundle in build directory
 */
gulp.task("webpack", function(callback) {

    webpack({
        devtool: "source-map",
        entry: {
            javascript: [__dirname + "/dist/client/js/app.js"]
        },
        externals: {
            "jquery": "jQuery"
        },
        output: {
            filename: "main.js",
            path: __dirname + "/build"
        },
        module: {
            loaders: [
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    loaders: ["babel-loader"]
                },
                {
                    test: /\.html$/,
                    loader: "file?name=[name].[ext]"
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }, function(err, stats) {
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
gulp.task('concat', function() {
    return gulp.src(paths.css)
        .pipe(concat('app.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['clean', 'webpack', 'concat']);