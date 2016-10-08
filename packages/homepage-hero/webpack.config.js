var path = require('path');

module.exports = {
  entry: './react/index.js',
  output: {
    path: "./src",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.styl$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
          'stylus-loader',
        ],
      }
    ]
  }
};
