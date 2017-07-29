/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const PrerenderSpaPlugin = require('prerender-spa-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const DEV_MODE = process.env.NODE_ENV === 'development';

const config = {
  context: path.resolve('src'),
  entry: {
    app: ['./js/index.js'],
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
  },
  output: {
    filename: 'asset/js/[name].js?[hash]',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
  },
  resolve: {
    modules: [
      path.resolve('src/html'),
      path.resolve('src/js'),
      path.resolve('node_modules'),
    ],
    alias: {
      '@': path.resolve(__dirname, 'src/js'),
    },
    extensions: ['.js'],
  },
  devServer: {
    contentBase: 'build',
    historyApiFallback: true,
    port: 8080,
    hot: true,
    stats: {
      chunks: false,
      colors: true,
    },
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
          loader: 'url-loader',
          options: { limit: 1024 },
        },
        exclude: /node_modules/,
      },
      { test: /\.(eot|svg|ttf|woff|woff2|swf)$/, use: 'file-loader' },
      { test: /\.json$/, use: 'json-loader' },
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
      'process.env': {
        NODE_ENV: JSON.stringify(DEV_MODE ? 'development' : 'production'),
      },
    }),

  ],
};

/* if (!DEV_MODE) {
  config.plugins.push(new PrerenderSpaPlugin(
    path.join(__dirname, './dist'),
    ['/', '/about', '/child']
  ));
} */

module.exports = config;
