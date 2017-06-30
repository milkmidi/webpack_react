const prerenderer = require('simple-react-prerender');
const path = require('path');
// import a from './src/js/a';

prerenderer({
    // optional: the path to the file where the app shall be prerendered
    // if provided, simple-react-prerender will write the prerendered app here
    // if not provided, simple-react-prerender will return the prerendered string
  html: path.resolve(__dirname, './src/html/index.html'),
    // mandatory: the app to prerender
  app: path.resolve(__dirname, './src/js/component/Child.js'),
    // optional: the props for the app
  props: {},
    // optional: the config of jsdom - useful if you are using ReactRouter
  jsDom: {
    url: 'https://example.org/',
    referrer: 'https://example.org/',
    contentType: 'text/html',
  },
    // optional: the babel config - will be used with babel-register
    // can be a JSON string or an object
  babel: undefined,
    // optional: dry run - no file will be changed
  dry: false,
    // optional: silent mode - don't print anything on the console
  silent: false,
});

/* import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext , Router } from 'react-router';

const routes = require('./src/js/routes');
// exports.prerender = () => ReactDOMServer.renderToString(<AppContainer />);

/* const App = () => (
  <h1>Hi</h1>
);

// export default () => renderToString(<App />);
// console.log(renderToString(<RouterContext />));
console.log(renderToString(<Router routes={routes} />));
*/
