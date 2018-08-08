import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { NavLink } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import './Navigation.styl';
import NaviButton from './NaviButton';

export default class Navigation extends Component {
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
      <nav className={`navigation ${classnames({ show: showNavigation })}`}>
        <div className="navigation__content">
          <NavLink exact className="btn btn-primary navigation__nav-link" to="/">Home</NavLink>
          <NavLink exact className="btn btn-primary navigation__nav-link" to="/device">device</NavLink>
          <div className="navigation__menu-btn">
            <NaviButton onClick={onToggleNavigation} open={showNavigation}/>
          </div>
        </div>
      </nav>
    );
  }
}
