import React from 'react';
import {
  Route,
  NavLink,
} from 'react-router-dom';

const Navigation = () => (
  <Route render={() => (
    <div className="navigation_root">
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/child">child</NavLink></li>
      </ul>
      <hr/>
    </div>
  )}/>
);

export default Navigation;
