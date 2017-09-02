import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import User from '@/container/UserContainer';
import Main from '../Main';
import Child from '../Child';
import About from '../About';
import Navigation from '../Navigation';

import './App.styl';


// eslint-disable-next-line
const App = ({ location }) => (
  <main>
    <Navigation />
    <CSSTransition
      timeout={2000}
    >
      <Switch key={location.key} location={location}>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/Child" component={Child}/>
        <Route path="/user" render={({ match }) =>
          <User>
            <Route exact path={`${match.url}/child`} component={Child} />
          </User>
        }/>
      </Switch>
    </CSSTransition >
  </main>
);


export default withRouter(App);
