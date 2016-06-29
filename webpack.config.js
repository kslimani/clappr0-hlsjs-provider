var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'provider.js'),
  externals: {
    clappr: 'Clappr'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
            compact: true,
        }
      }
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  output: {
    filename: 'dist/clappr0-hlsjs-provider-webpack.js',
    library: 'StreamrootHlsjs',
    libraryTarget: 'umd',
  },
};