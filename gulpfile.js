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

  config.devtool = 'inline-source-map';

  const { entry } = config;
  Object.keys(entry).forEach((key) => {
    if (key !== 'vendor') {
      entry[key].unshift(`webpack-dev-server/client?${URI}`, 'webpack/hot/dev-server');
    }
  });

  const server = new WebpackDevServer(webpack(config), config.devServer);
  server.listen(port, host, (err) => {
    if (err) { console.log(err); }
    gutil.log('[webpack-dev-server]', URI);
    cb();
  });
});

gulp.task('webpack-build', (cb) => {
  process.env.NODE_ENV = 'production';
  const config = require('./webpack.config.js');
  webpack(config, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString({ colors: true, chunkModules: false }));
    cb();
  });
});
gulp.task('default', ['webpack-dev-server']);

gulp.task('p', () => runSequence('rimraf', 'm', 'webpack-build'));
