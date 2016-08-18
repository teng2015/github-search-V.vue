const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: {
    app:  './src/client-entry.js',
    vendor: ['vue','vue-router','vuex','jquery']
  },
  output: {
    path: path.resolve(__dirname,'../dist'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
  module:{
    loaders: [
      {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel',
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue'
      },
       {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html'
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.app.js'),
    new webpack.ProvidePlugin({
        Vue: "vue",
        VueRouter: 'vue-router',
        Vuex: "vuex"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  vue: {
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}