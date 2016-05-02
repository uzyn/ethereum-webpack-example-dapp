module.exports = {
  entry: [
    './index',
  ],
  output: {
    filename: 'bundle.js'
  },
  web3Loader: {
    constructorParams: {
      MyToken: [ 250000, 'The Coin', 2, 'TC$', '1.0.0' ]
    }
  },
  module: {
    loaders: [
      {
        test: /\.sol$/,
        loaders: ['web3', 'solc']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      },
    ]
  }
};
