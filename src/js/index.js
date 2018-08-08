/* eslint no-console:0 */
import 'regenerator-runtime/runtime';
import 'es6-promise/auto';
import React from 'react';
import 'rxjs';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';


import '~/css/app.styl';
import App from '@/container/App';
import configureStore from './configureStore';

const store = configureStore();
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const renderApp = (Component) => {
  const rootElement = document.getElementById('app');
  const r = rootElement.hasChildNodes() ? hydrate : render;
  r(
    <AppContainer>
      <Provider store={store}>
        <Router>
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
      const NewApp = require('./container/App').default;
      renderApp(NewApp);
    });
  }
}

