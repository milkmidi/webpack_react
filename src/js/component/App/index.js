import React from 'react';
import {
  BrowserRouter as Router,
  Route,
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
      <Route exact path="/" component={Main}/>
      <Route path="/about" component={About}/>
      <Route path="/Child" component={Child}/>
    </main>
  </Router>
);


export default App;
