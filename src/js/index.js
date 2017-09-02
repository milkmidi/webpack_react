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


const renderApp = Component =>
  render(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );

if (typeof document !== 'undefined') {
  renderApp(App);

  if (module.hot) {
    module.hot.accept('./component/App', () => {
      renderApp(App);
    });
  }
}

// React Prerender
export default function (locals, callback) {
  // const str = ReactDOMServer.renderToStaticMarkup(
  const ssrStr = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={locals.path} context={{}}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  callback(null, ssrStr);
}
