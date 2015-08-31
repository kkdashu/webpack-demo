var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    index: './app/scripts/index.js',
    k: './app/scripts/k.js'
  },
  output:{
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css'},
      { test: /\.hbs$/, loader: 'handlebars-loader'},
      { test: /\.em$/, loader: 'emblem-loader'},
      { test: /\.coffee$/, loader: 'coffee-loader'}
    ]
  },
  externals: {
    'jquery': 'jQuery'
  }
};
