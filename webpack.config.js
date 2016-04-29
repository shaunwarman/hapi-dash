var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: "source-map",
    entry: {
        javascript: ["./src/client/js/app"]
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
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};