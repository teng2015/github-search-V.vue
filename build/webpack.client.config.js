var config = require('./webpack.base.config')
var webpack = require('webpack')
var openBrowser = require('open-browser-webpack-plugin');

// here is a bug that just can't enter pro even you set NODE_ENV=production in package.json
// later to fix
if (process.env.NODE_ENV == 'production') {
  console.log("enter pro build")
  var ExtractTextPlugin = require('extract-text-webpack-plugin')

  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}else{
  console.log("enter dev build")
  config.plugins.push(
    new openBrowser({
      url: 'http://localhost:8080',
    })
  )
}

module.exports = config
