import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navi = styled.nav`
  background-color:#c3c3c3;
  font-size: 1.5em;
`;
const StyledNavLink = styled(NavLink)`
  font-size:30px;
  text-decoration: none;
  color:black;
  &.active{
    color:white;
  }
`;

const Navigation = () => (
  <Navi className="flex items-center border">
    <ul className="mr-auto">
      <li><StyledNavLink to="/" exact>Home</StyledNavLink></li>
      <li><StyledNavLink to="/about">About</StyledNavLink></li>
      <li><StyledNavLink to="/child">child</StyledNavLink></li>
      <li><StyledNavLink to="/user/child">UserChild</StyledNavLink></li>
    </ul>
    <div>milkmidi</div>
  </Navi>
);

export default Navigation;
