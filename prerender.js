import React from 'react';
import { renderToString } from 'react-dom/server';

const App = require('./src/js/app');

// exports.prerender = () => ReactDOMServer.renderToString(<AppContainer />);

/* const App = () => (
  <h1>Hi</h1>
);*/

// export default () => renderToString(<App />);
console.log(renderToString(<App />));
