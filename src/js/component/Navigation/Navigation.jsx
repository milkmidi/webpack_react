import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav-container">
        <NavLink to="/getUserMedia" exact>getUserMedia</NavLink>
      </nav>

    );
  }
}
