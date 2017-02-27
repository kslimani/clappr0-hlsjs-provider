const webpack = require('webpack');
const {
    version
} = require('./package.json');

module.exports = {
    entry: './provider.js',
    output: {
        library: [
            'StreamrootHlsjs'
        ],
        libraryTarget: 'umd',
        path: __dirname + '/dist',
        filename: 'clappr0-hlsjs-provider.js'
    },
    module: {
        noParse: /node_modules\/streamroot-p2p\/p2p.js/,
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.js$/
        }]
    },
    externals: {
        clappr: {
            amd: 'clappr',
            commonjs: 'clappr',
            commonjs2: 'clappr',
            root: 'Clappr'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(`v${version}`)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
