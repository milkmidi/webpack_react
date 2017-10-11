import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  StaticRouter,
} from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import ReactDOMServer from 'react-dom/server';
// import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import store from './reduxjs/store';
import App from './component/App';


const renderApp = Component =>
  render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>
    </AppContainer>,
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
  const assets = Object.keys(locals.webpackStats.compilation.assets);
  console.log('---------------------');
  console.log(locals.path);
  console.log('---------------------');
  console.log(locals.assets);
  console.log('---------------------');
  console.log(assets);
  // console.log(locals.webpackStats);
  const prerenderStr = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={locals.path} context={{}}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  callback(null, prerenderStr);
}
