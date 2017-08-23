import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Main from '../Main';
import Child from '../Child';
import About from '../About';
import Navigation from '../Navigation';
import User from '../User';

import './App.styl';


const App = () => (
  <main>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/about" component={About}/>
      <Route path="/Child" component={Child}/>
      <Route path="/user" render={({ match }) =>
        <User>
          <Route path={`${match.url}/child`} component={Child} />
        </User>
      }/>
    </Switch>
  </main>
);


export default App;
