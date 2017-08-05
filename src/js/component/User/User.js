/**
* User
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './User.styl';

class User extends Component {
  render() {
    return (
      <div className="user-root">
        <h1>Hi</h1>
        {this.props.children}
      </div>
    );
  }
}

User.propTypes = {
  children: PropTypes.node,
};

export default User;
