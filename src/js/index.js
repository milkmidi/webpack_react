import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import store from './reduxjs/store';


import App from './component/App';

import '../css/app.styl';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
