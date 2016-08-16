const config = require('./webpack.base.config')
const webpack = require('webpack')
const openBrowser = require('open-browser-webpack-plugin');

if (process.env.NODE_ENV === 'production') {
  const ExtractTextPlugin = require('extract-text-webpack-plugin')

  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}else{
  config.plugins.push(
    new openBrowser({
      url: 'http://localhost:8080',
    })
  )
}

module.exports = config
