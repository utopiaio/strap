const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/index.js',
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    alias: { '@app': path.resolve(__dirname, 'app') },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      filename: 'index.html',
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
  ],
  module: {
    rules: [
      // js[x]
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },

      // font + images
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
