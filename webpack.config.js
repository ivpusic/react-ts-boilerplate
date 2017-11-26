var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.tsx')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'index.hbs')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
      minChunks(module) {
        return module.context &&
          module.context.indexOf('node_modules') >= 0;
      }
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      'node_modules',
      'src',
    ]
  },
  devServer: {
    hot: true,
    inline: true,
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
      exclude: /node_modules/,
    }]
  },
  devtool: 'source-map'
};
