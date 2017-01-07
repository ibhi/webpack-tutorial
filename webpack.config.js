var path = require('path');
var webpack = require('webpack');

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
        })
      ]
  :   [
        new webpack.HotModuleReplacementPlugin()
      ];

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
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      },
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
};