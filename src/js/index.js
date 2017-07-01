import React from 'react';
import { render } from 'react-snapshot';

import App from './component/App';

import '../css/app.styl';

render(
  <App />,
  document.getElementById('root'),
);
