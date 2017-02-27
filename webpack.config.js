const path = require('path');
const webpack = require('webpack');
const { version } = require('./package.json');

module.exports = {
    entry: './provider.js',
    output: {
        library: 'StreamrootHlsjs',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        filename: 'clappr0-hlsjs-provider.js'
    },
    module: {
        noParse:  /node_modules\/hlsjs-p2p-bundle\/hlsjs-p2p-bundle.js/,
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.js$/
        }]
    },
    resolve: {
      modules: [
        'node_modules',
      ],
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
            __NAME__: JSON.stringify('streamroot_playback'),
            __VERSION__: JSON.stringify(`v${version}`)
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
