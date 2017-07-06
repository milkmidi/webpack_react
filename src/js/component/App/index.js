import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Main from '../Main';
import Child from '../Child';
import Navigation from '../Navigation';

import './index.styl';

const About = () => (
  <div>
    <h2>About1234d5</h2>
  </div>
);


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
