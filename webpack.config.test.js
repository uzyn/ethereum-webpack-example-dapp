var nodeExternals = require('webpack-node-externals');
var config = require('./webpack.config.js');

config.output = {
  devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
};

// Set target to node to be runable within Mocha
config.target = 'node';

config.externals = [nodeExternals()];

// Enable source maps
config.devtool = 'cheap-module-source-map';

module.exports = config;
