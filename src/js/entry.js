import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './component/App';


export default function (locals, callback) {
  // console.log(locals.assets);
  // console.log(locals.webpackStats.compilation.assets);
  const assets = Object.keys(locals.webpackStats.compilation.assets);
  const css = assets.filter(value => value.match(/\.css$/));
  const js = assets.filter(value => value.match(/\.js$/));
  console.log(css);
  // console.log(js);
  const str = ReactDOMServer.renderToString(
    <StaticRouter location={locals.path} context={{}}>
      <App />
    </StaticRouter>,
  );
  callback(null, `<html>${locals.greet} from ${locals.path}  ${str} </html>`);
}
