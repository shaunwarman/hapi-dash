var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/client/js/app.js'
    ,
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'main.js'
    },
    // plugins: [
    //     new webpack.optimize.OccurenceOrderPlugin(),
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname
                // query: {
                //     presets: [ 'react-hmre' ]
                // }
            }
        ]
    }
}