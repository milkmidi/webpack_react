import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import User from '@/container/UserContainer';
import Main from '../Main';
import Child from '../Child';
import About from '../About';
import Navigation from '../Navigation';

import './App.styl';

const transitionHandler = {
  timeout: 500,
  onEnter() {
    document.querySelector('body').classList.add('animate');
  },
  onEntered() {
    document.querySelector('body').classList.remove('animate');
  },
};

const App = ({ location }) => {
  const key = location.pathname;
  return (
    <div className="app">
      <Navigation />
      <TransitionGroup component="main" className="main" >
        <CSSTransition
          key={key}
          timeout={transitionHandler.timeout}
          classNames="fade"
          onEnter={transitionHandler.onEnter}
          onEntered={transitionHandler.onEntered} >
          <Switch key={key} location={location}>
            <Route exact path="/" component={Main}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/child" component={Child}/>
            <Route path="/user" render={({ match }) =>
              <User>
                <Route exact path={`${match.url}/child`} component={Child} />
              </User>
            }/>
          </Switch>
        </CSSTransition>
      </TransitionGroup >
    </div>
  );
};
App.propTypes = {
  location: PropTypes.object,
};


export default withRouter(App);
