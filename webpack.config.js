var path = require('path');
var webpack = require("webpack");

module.exports = {
  context: __dirname + '/app',
  entry: ['./application.js'],
  output: {
    path: __dirname + '/www/',
    filename: 'bundle.js'
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      { test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(png|woff|ttf|eot|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: []
};
