import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';


import Mobile from '../Mobile';


const App = () => (
  <Switch>
    <Route path="/" name="mobile" component={Mobile}/>
  </Switch>
);

export default App;
