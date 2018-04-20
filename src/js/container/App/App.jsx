import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavigationContainer from '@/container/NavigationContainer';
import './App.styl';
import { hideNavigation } from '../../action';

const LoadingComponent = () => <div>Loading...</div>;

const GetUserMedia = Loadable({
  loader: () => import(/* webpackChunkName: "GetUserMedia" */'@/component/GetUserMedia'),
  loading: LoadingComponent,
});

const Mobile = Loadable({
  loader: () => import(/* webpackChunkName: "Mobile" */'@/container/Mobile'),
  loading: LoadingComponent,
});

const InlineVideo = Loadable({
  loader: () => import(/* webpackChunkName: "InlineVideo" */'@/component/InlineVideo'),
  loading: LoadingComponent,
});


class App extends Component {
  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
    onHideNavigation: PropTypes.func.isRequired,
  }
  componentWillReceiveProps(newProps) {
    if (this.props.location.hash !== newProps.location.hash) {
      this.props.onHideNavigation();
    }
  }
  render() {
    return (
      <Router>
        <main>
          <NavigationContainer />
          <div className="view">
            <Switch>
              <Route exact path="/" component={Mobile}/>
              <Route exact path="/getUserMedia" component={GetUserMedia}/>
              <Route exact path="/InlineVideo" component={InlineVideo}/>
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}


const mapStateToProps = state => ({
  showNavigation: state.main.showNavigation,
});

const mapDispatchToProps = dispatch => ({
  onHideNavigation() {
    console.log('123');
    dispatch(hideNavigation());
  },
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
