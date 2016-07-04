const path = require('path');
const webpack = require('webpack');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    context: path.join(__dirname),
    devtool: debug ? 'inline-sourcemap' : null,
    entry: './provider.js',

    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
                plugins: ['transform-class-properties', 'add-module-exports']
            }
        }]
    },

    output: {
        path: __dirname + '/dist',
        filename: 'clappr0-hlsjs-provider.js',
        library: ['StreamrootHlsjs']
    },

    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        })
    ]
};
