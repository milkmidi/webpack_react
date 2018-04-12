import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from '@/container/App';
import configureStore from '@/configureStore';
import '~/css/app.styl';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const store = configureStore();

// eslint-disable-next-line
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <Component />
        </Router>
      </Provider>
    </AppContainer>
    ,
    document.getElementById('app'),
  );
};

renderApp(App);


if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./container/App', () => {
    // eslint-disable-next-line
      const NewApp = require('./container/App').default;
      renderApp(NewApp);
    });
  }
}
