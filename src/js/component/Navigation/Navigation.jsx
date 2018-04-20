import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Navigation.styl';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav-container">
        <NavLink to="/getUserMedia">getUserMedia</NavLink>
        <NavLink to="/inlineVideo">inlineVideo</NavLink>
      </nav>
    );
  }
}
