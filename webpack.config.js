var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/client/js/index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'dist/index.css',
      disable: false,
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader',]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
};
