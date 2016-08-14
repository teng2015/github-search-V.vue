var config = require('./webpack.base.config')
var webpack = require('webpack')
var openBrowser = require('open-browser-webpack-plugin');

if (process.env.NODE_ENV === 'production') {
  var ExtractTextPlugin = require('extract-text-webpack-plugin')

  // config.vue = {
  //   loaders: {
  //     sass: ExtractTextPlugin.extract({
  //       loader: "css-loader!sass-loader",
  //       fallbackLoader: "vue-style-loader"
  //     })
  //   }
  // }

  config.plugins.push(
    // new ExtractTextPlugin('styles.css'),
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
