const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const PrerenderSpaPlugin = require('prerender-spa-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ReplaceSSR = require('./internal/webpackPlugins/ReplaceSSR');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const DEV_MODE = process.env.NODE_ENV === 'development';

const toFilename = (name, ext = 'js') => {
  const units = [name, '.', ext];
  if (!DEV_MODE) {
    const hashStr = (ext === 'css' ? '-[contenthash]' : '-[chunkhash]');
    units.splice(1, 0, hashStr);
  }
  return units.join('');
};

const config = {
  context: path.resolve('src'),
  entry: {
    app: [
      './js/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
  },
  output: {
    filename: toFilename('asset/js/[name]'),
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    libraryTarget: 'umd',
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
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: ['babel-loader'],
        include: path.resolve('src'),
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'stylus-loader',
          ],
        }),
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
            pretty: true,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      children: true,
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      template: 'html/index.template.pug',
      chunks: ['app', 'vendor', 'manifest'],
      filename: `${DEV_MODE ? 'index' : '200'}.html`,
      data: {
        DEV_MODE,
      },
    }),
    new ExtractTextPlugin({
      filename: toFilename('asset/css/app', 'css'),
      disable: DEV_MODE,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(DEV_MODE ? 'development' : 'production'),
      },
    }),
    ...DEV_MODE ? [
      new FriendlyErrorsWebpackPlugin(),
    ] : [
      new CleanWebpackPlugin(['build']),
      new StaticSiteGeneratorPlugin({
        entry: 'app',
        paths: [
          '/',
          '/about/',
          '/child/',
        ],
        locals: {
        },
      }),
      new ReplaceSSR({

      }),
    ],
  ],
  devServer: {
    // contentBase: 'build',
    historyApiFallback: true,
    port: 3000,
    hot: true,
    stats: {
      chunks: false,
      chunkModules: false,
      colors: true,
    },
    host: '0.0.0.0',
    disableHostCheck: true,
  },
};

module.exports = config;
