var webpack = require('webpack');
var config = require('./webpack.config.js');

config.plugins = config.plugins.concat([
  // Minify code
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
]);

module.exports = config;
