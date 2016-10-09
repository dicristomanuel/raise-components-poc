var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')

module.exports = {
  entry: {
    'main': './entry.js'
  },

  output: {
    filename: 'bundle.js',
    libraryTarget: 'umd'
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
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('main', '/template.html', data)
  ]
}
