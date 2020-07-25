const path = require('path');

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['tyle', 'css']}
    ]
  }
}
