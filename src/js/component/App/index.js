import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Main from '../Main';
import Child from '../Child';
import About from '../About';
import Navigation from '../Navigation';

import './index.styl';


const App = () => (
  <Router>
    <main>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/Child" component={Child}/>
      </Switch>
    </main>
  </Router>
);


export default App;
