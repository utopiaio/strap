const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    hot: true,
    historyApiFallback: true,
  },
});
