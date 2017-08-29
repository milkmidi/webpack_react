/* eslint global-require:off, no-console:off */
const gulp = require('gulp');
const runSequence = require('run-sequence');
const webpack = require('webpack');
const gutil = require('gulp-util');
const WebpackDevServer = require('webpack-dev-server');
const rimraf = require('rimraf');

gulp.task('rimraf', (cb) => {
  console.log('rimraf');
  rimraf('./dist', cb);
});

gulp.task('m', () => {
});

gulp.task('webpack-dev-server', (cb) => {
  process.env.NODE_ENV = 'development';

  const host = 'localhost';
  const port = 3000;
  const URI = `http://${host}:${port}/`;

  const config = require('./webpack.config.js');


  const { entry } = config;
  Object.keys(entry).forEach((key) => {
    if (key !== 'vendor') {
      entry[key].unshift(`webpack-dev-server/client?${URI}`, 'webpack/hot/dev-server');
    }
  });
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const server = new WebpackDevServer(webpack(config), config.devServer);
  server.listen(port, host, (err) => {
    if (err) { console.log(err); }
    gutil.log('[webpack-dev-server]', URI);
    cb();
  });
});

gulp.task('webpack-build', (cb) => {
  process.env.NODE_ENV = 'production';
  const config = require('./webpack.config');
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({
      test: /\.(css|scss|styl)$/,
      minimize: true,
    }));
  const compiler = webpack(config);
  compiler.apply(new webpack.ProgressPlugin());
  compiler.run((err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    if (stats.hasErrors()) {
      console.error(stats.toString('errors-only'));
      return;
    }
    console.log('[webpack:build]', stats.toString({
      colors: true,
      children: false,
      modules: false,
    }));
    cb();
  });
});
gulp.task('default', ['webpack-dev-server']);

gulp.task('p', () => runSequence('rimraf', 'm', 'webpack-build'));
