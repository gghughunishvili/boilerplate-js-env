import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { template } from 'babel-core';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  mode: 'development',
  entry: {
    vendor: path.resolve(__dirname, './src/vendor'),
    main: path.resolve(__dirname, './src/index'),
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    // Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they are cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
    // Eliminate duplicating packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['tyle', 'css']}
    ]
  }
}
