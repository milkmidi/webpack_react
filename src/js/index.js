import React from 'react';
// import { render } from 'react-dom';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import store from './reduxjs/store';

import App from './component/App';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
