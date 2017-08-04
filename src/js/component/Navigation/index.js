import React from 'react';
import {
  Route,
  NavLink,
} from 'react-router-dom';

import './index.styl';

const Navigation = () => (
  <Route render={() => (
    <div className="navigation_root">
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/child">child</NavLink></li>
        <li><NavLink to="/user/child">UserChild</NavLink></li>
      </ul>
      <hr/>
    </div>
  )}/>
);

export default Navigation;
