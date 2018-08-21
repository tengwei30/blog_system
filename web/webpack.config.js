const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '滕伟'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // module: {
  //     rules: [
  //         {
  //             test: /\.css$/,
  //             use: [
  //               'style-loader',
  //               'css-loader'
  //             ]
  //         },
  //         {
  //           test: /\.(png|svg|jpg|gif)$/,
  //           use: [
  //             'file-loader'
  //           ]
  //         }
  //     ]
  // }
};