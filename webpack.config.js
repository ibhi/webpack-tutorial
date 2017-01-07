var path = require('path');

module.exports = {
  entry: './app.js', // It can be a just a string of file name as well
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
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
  devtool: 'sourcemap'
};