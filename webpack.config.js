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
      ]
var sourcemap = PRODUCTION ? '' : 'sourcemap';

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
console.log(plugins);
module.exports = {
  entry: entry, // It can be a just a string of file name as well
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/dist'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /.\js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  devtool: sourcemap,
};