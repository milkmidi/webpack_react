import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  StaticRouter,
} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
// import { render } from 'react-snapshot';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import store from './reduxjs/store';
import App from './component/App';

const history = createHistory();


const renderApp = Component =>
  render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Component history={history}/>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );

if (typeof document !== 'undefined' && process.env.NODE_ENV === 'development' && module.hot) {
  renderApp(App);

  module.hot.accept('./component/App', () => {
    const NewApp = require('./component/App').default;
    renderApp(NewApp);
  });
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
