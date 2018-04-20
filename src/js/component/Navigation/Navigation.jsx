import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Navigation.styl';

class Navigation extends Component {
  static propTypes = {
    showNavigation: PropTypes.bool,
    onToggleNavigation: PropTypes.func,
  }
  render() {
    const { showNavigation, onToggleNavigation } = this.props;
    return (
      <nav className={`nav-container ${classnames({ show: showNavigation })}`}>
        <div className="content">
          <NavLink exact className="btn btn-primary" to="/">Home</NavLink>
          <NavLink exact className="btn btn-primary" to="/getUserMedia">getUserMedia</NavLink>
          <NavLink exact className="btn btn-primary" to="/inlineVideo">inlineVideo</NavLink>
          <a className="close-btn" onClick={onToggleNavigation}>{showNavigation ? 'X' : '三'}</a>
        </div>
      </nav>
    );
  }
}
export default withRouter(Navigation);
