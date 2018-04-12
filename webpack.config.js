const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const DEV_MODE = process.env.NODE_ENV === 'development';

console.log('DEV_MODE', DEV_MODE);
const toFilename = (name, ext = 'js') => {
  let units = `${name}.${ext}`;
  if (!DEV_MODE) {
    units += (ext === 'css' ? '?[contenthash]' : '?[chunkhash]');
  }
  return units;
};


const config = {
  context: path.resolve('src'),
  entry: {
    app: ['./js/index.js'],
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-redux',
    ],
  },
  output: {
    filename: toFilename('asset/js/[name]'),
    chunkFilename: toFilename('asset/js/[name].chunk'),
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  devtool: DEV_MODE ? 'cheap-module-source-map' : false,
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('src/asset'),
      path.resolve('node_modules'),
    ],
    alias: {
      common: path.resolve('./common'),
      '~': path.resolve('./src'),
      '@': path.resolve('./src/js'),
      img: path.resolve('./src/asset/img'),
    },
    extensions: ['.js', '.jsx'],
  },
};

if (DEV_MODE) {
  Object.keys(config.entry).forEach((key) => {
    if (key !== 'vendor') {
      config.entry[key].unshift('react-hot-loader/patch');
    }
  });
}

config.module = {
  rules: [
    {
      test: /\.js(x?)$/,
      use: ['babel-loader'],
      include: [path.resolve('src/js')],
      exclude: /node_modules/,
    },
    {
      test: /\.(png|jpg|gif|svg|ico)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: '[path][name].[ext]?[hash:8]',
        },
      },
      include: path.resolve('src/asset/img'),
      exclude: /node_modules/,
    },
    {
      test: /\.styl$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?sourceMap',
          'postcss-loader?sourceMap',
          'stylus-loader?sourceMap&paths=src/css',
        ],
      }),
      include: [
        path.resolve('src/css'),
        path.resolve('src/js'),
      ],
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
      include: path.resolve('src/html'),
      exclude: /node_modules/,
    },
  ],
};

config.performance = {
  maxEntrypointSize: 300000,
  hints: !DEV_MODE ? 'warning' : false,
};

config.plugins = [
  new ExtractTextPlugin({
    filename: toFilename('asset/css/[name]', 'css'),
    disable: DEV_MODE,
  }),
  new HtmlWebpackPlugin({
    template: 'html/index.pug',
    filename: 'index.html',
    chunks: ['app', 'vendor', 'manifest'],
    data: {
      DEV_MODE,
    },
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer',
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest'],
    minChunks: Infinity,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(DEV_MODE ? 'development' : 'production'),
    },
  }),
  ...DEV_MODE ? [
    new FriendlyErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ] : [
    new CleanWebpackPlugin('./dist'),
  ],
];

config.devServer = {
  historyApiFallback: true,
  noInfo: true,
  hot: true,
  port: 3000,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true,
    hash: false,
  },
  host: '0.0.0.0',
  disableHostCheck: true,
  /* proxy: {
    '/socket.io/*': { // 這個一定要加，不然 socket.io 開三個視窗就會咬死
      target: 'http://localhost:3002',
      ws: true,
    },
  }, */
};

module.exports = config;
