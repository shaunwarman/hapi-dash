var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/client/js/app.js'
    ,
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    }
};