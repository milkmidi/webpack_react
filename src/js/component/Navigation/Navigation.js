import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

import './Navigation.styl';

const Navigation = () => (
  <nav className="navigation_root">
    <ul>
      <li><NavLink to="/" exact>Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/child">child</NavLink></li>
      <li><NavLink to="/user/child">UserChild</NavLink></li>
    </ul>
    <hr/>
  </nav>
);

export default Navigation;
