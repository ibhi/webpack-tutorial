var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var PRODUCTION = process.env.NODE_ENV === 'production';
var DEVELOPMENT = process.env.NODE_ENV === 'development';

var entry = PRODUCTION 
  ?   ['./app.js']
  :   [
        './app.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
      ];

var sourcemap = PRODUCTION ? '' : 'source-map';

var plugins = PRODUCTION 
  ?   [
        new webpack.optimize.UglifyJsPlugin({
          comments: false,
          compress: {
            warnings: true
          },
          mangle: true
        }),
        new ExtractTextPlugin('style-[hash:12].css'),
        new HTMLWebpackPlugin({
          template: 'index-template.html'
        })
      ]
  :   [
        new webpack.HotModuleReplacementPlugin()
      ];

plugins.push();

var cssLoader = PRODUCTION 
  ?   ExtractTextPlugin.extract({
        loader: 'css-loader?minimize&colormin!sass-loader',
        fallbackLoader: 'style-loader'
      })
  :   'style-loader!css-loader!sass-loader';

module.exports = {
  devtool: sourcemap,
  entry: entry, // It can be a just a string of file name as well
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /.\js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['url-loader?limit=100000&name=images/[hash:12].[ext]'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: cssLoader,
        exclude: /node_modules/
      },
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: PRODUCTION ? '/' : '/dist/',
    filename: PRODUCTION ? 'bundle-[hash:12].min.js' : 'bundle.js'
  },
};