import React from 'react';
import PropTypes from 'prop-types';
import './NaviButton.styl';

const NaviButton = ({ open, onClick }) => (
  <div className={`navi__button ${open ? 'open' : ''}`} onClick={onClick}>
    <div className="line-menu half start"></div>
    <div className="line-menu"></div>
    <div className="line-menu half end"></div>
  </div>
);
NaviButton.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
};
export default NaviButton;
