var webpack = require('webpack');
var path = require('path');


module.exports = {
  entry: {
    app:  './src/client-entry.js',
    vendor: ['vue','vue-router','echart']
  },
  output: {
    path: path.resolve(__dirname,'../dist'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
  module:{
    loaders: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue'
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
      },
      { 
        test: /\.(png|jpg)$/, 
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: { 
    alias: { 
      echart: path.resolve(__dirname,'../src/lib/echarts.js')
    } 
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.app.js'),
    new webpack.ProvidePlugin({
        Vue: "vue",
        VueRouter: 'vue-router',
        echart: 'echart',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}