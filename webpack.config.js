/* eslint no-console:0 */
const path = require('path');
const chalk = require('chalk');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WeinreWebpackPlugin = require('weinre-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development';
const WEINRE_MODE = DEV_MODE && process.env.WEINRE;
console.log(chalk.bgGreen.black('process.env.NODE_ENV', process.env.NODE_ENV));

const toFilename = name => (DEV_MODE ? `${name}.js` : `${name}-[chunkhash].js`);
const toCSSFilename = name => (DEV_MODE ? `${name}.css` : `${name}-[contenthash].js`);
const getLocalhostIPAddress = () => {
  const ifs = require('os').networkInterfaces();
  // eslint-disable-next-line
  const host = `${Object.keys(ifs).map(x => ifs[x].filter(x => x.family === 'IPv4' && !x.internal)[0]).filter(x => x)[0].address}`;
  return host || 'localhost';
};


const config = {
  mode: process.env.NODE_ENV,
  context: path.resolve('src'),
  entry: {
    app: ['./index.js'],
  },
  output: {
    filename: toFilename('assets/js/[name]'),
    chunkFilename: toFilename('assets/js/[name]-chunk'),
    path: path.resolve('dist'),
    publicPath: '',
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('src/assets'),
      path.resolve('node_modules'),
    ],
    alias: {
      '~': path.resolve('src'),
      '@': path.resolve('src'),
      img: path.resolve('src/assets/img'),
    },
    extensions: ['.js', '.jsx'],
  },
};


config.module = {
  rules: [
    {
      test: /\.js(x?)$/,
      use: ['babel-loader'],
      include: path.resolve('src'),
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
      include: path.resolve('src/assets/img'),
      exclude: /node_modules/,
    },
    {
      test: /\.(styl|stylus)$/,
      use: [
        'css-hot-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../../',
          },
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            minimize: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              require('autoprefixer')({
                browsers: [
                  'last 5 versions',
                  'iOS >=10',
                  'not ie <= 11',
                  '>3%',
                ],
                flexbox: 'no-2009',
              }),
            ],
          },
        },
        {
          loader: 'stylus-loader',
          options: {
            paths: 'src/css/',
            sourceMap: true,
          },
        },
      ],
      include: [
        path.resolve('src'),
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
  new HtmlWebpackPlugin({
    template: 'html/index.pug',
    filename: 'index.html',
    data: {
      DEV_MODE,
      weinreScript: WEINRE_MODE ? `http://${getLocalhostIPAddress()}:8000/target/target-script-min.js#anonymous` : false,
    },
  }),
  new CopyWebpackPlugin([
    { from: 'assets/copy', to: './', ignore: ['.*'] },
  ]),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer',
  }),
  new MiniCssExtractPlugin({
    filename: toCSSFilename('assets/css/[name]'),
    chunkFilename: toCSSFilename('assets/css/[name]-chunk'),
  }),
  /* new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(DEV_MODE ? 'development' : 'production'),
    },
  }), */
  ...DEV_MODE ? [
    new FriendlyErrorsPlugin(),
  ] : [
    new CleanWebpackPlugin('./dist'),
  ],
];


config.optimization = {
  splitChunks: {
    chunks: 'all',
    automaticNameDelimiter: '-',
    cacheGroups: {
      vendors: {
        // name: 'vendors',
        chunks: 'all',
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
      },
    },
  },
};

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


if (DEV_MODE) {
  Object.keys(config.entry).forEach((key) => {
    config.entry[key].unshift('react-hot-loader/patch');
  });
}
if (WEINRE_MODE) {
  config.plugins.push(new WeinreWebpackPlugin({
    httpPort: 8000,
    boundHost: '0.0.0.0',
    verbose: false,
    debug: false,
    readTimeout: 5,
  }));
}

module.exports = config;
