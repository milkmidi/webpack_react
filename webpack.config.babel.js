const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);

import prerender from './prerender';

console.log(prerender());

const config = {
  context: path.resolve('src'),
  entry: {
    app: ['./js/app.js'],
    vendor: ['react', 'react-dom', 'react-router'],
  },
  output: {
    filename: 'asset/js/[name].js?[hash]',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
    // devtool: "source-map",
  resolve: {
    modules: [
      path.resolve('src/html'),
      path.resolve('src/js'),
      path.resolve('node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },
  resolveLoader: {
  },

  devServer: {    // https://webpack.js.org/configuration/dev-server/#devserver
    contentBase: 'dist',
    historyApiFallback: true,
    port: 8080,
    stats: {
      chunks: false,
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader',
        include: path.resolve('src'),
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
        include: [
          path.resolve('src/css'),
          path.resolve('src'),
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'url-loader?limit=1024',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            self: true,
            pretty: DEV_MODE,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),

    new HtmlWebpackPlugin({
      template: 'html/index.template.pug',
      data: {
        DEV_MODE,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEV_MODE ? "'development'" : '"production"',
    }),
  ],
};

module.exports = config;
