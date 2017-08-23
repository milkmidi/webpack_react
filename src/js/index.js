import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  StaticRouter,
} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
// import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import store from './reduxjs/store';
import App from './component/App';

if (typeof document !== 'undefined') {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );

  if (module.hot) {
    module.hot.accept();
  }
}

// React Prerender
export default function (locals, callback) {
  // const str = ReactDOMServer.renderToStaticMarkup(
  const ssrStr = ReactDOMServer.renderToString(
    <StaticRouter location={locals.path} context={{}}>
      <App />
    </StaticRouter>);
  callback(null, ssrStr);
}
