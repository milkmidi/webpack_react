// const webpack = require('webpack');

// const serverRender = require('../../buildServer/main.js').default;

// serverRender({ })('/Rudy');


const webpack = require('webpack'); // aliased to webpack-universal
// const webpackDevMiddleware = require('webpack-dev-middleware')
// const webpackHotMiddleware = require('webpack-hot-middleware')
// const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
// const clientConfig = require('./webpack/client.dev')
// const serverConfig = require('./webpack/server.dev')
const clientConfigProd = require('../webpack/webpack.client');
const serverConfigProd = require('../webpack/webpack.server');

webpack([clientConfigProd, serverConfigProd]).run((err, stats) => {
// webpack([serverConfigProd]).run((err, stats) => {
  const clientStats = stats.toJson().children[0];
  const serverRender = require('../../buildServer/app.server.js').default;
  // console.log(clientStats);

  // app.use(publicPath, express.static(outputPath))
  serverRender({ clientStats })('/Rudy');

  // done()
});
