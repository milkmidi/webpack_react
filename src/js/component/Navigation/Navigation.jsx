import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { NavLink } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import './Navigation.styl';

class Navigation extends Component {
  static propTypes = {
    showNavigation: PropTypes.bool,
    onToggleNavigation: PropTypes.func,
    onHideNavigation: PropTypes.func.isRequired,
    // React-Router props
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
  }
  componentWillReceiveProps({ location }) {
    if (this.props.location.pathname !== location.pathname) {
      this.props.onHideNavigation();
    }
  }
  render() {
    const { showNavigation, onToggleNavigation } = this.props;
    return (
      <nav className={`nav-container ${classnames({ show: showNavigation })}`}>
        <div className="content">
          <NavLink exact className="btn btn-primary" to="/">Home</NavLink>
          <NavLink exact className="btn btn-primary" to="/getUserMedia">getUserMedia</NavLink>
          <NavLink exact className="btn btn-primary" to="/inlineVideo">inlineVideo</NavLink>
          <NavLink exact className="btn btn-primary" to="/device">device</NavLink>
          <a className="close-btn" onClick={onToggleNavigation}>{showNavigation ? 'X' : '三'}</a>
        </div>
      </nav>
    );
  }
}
export default Navigation;
