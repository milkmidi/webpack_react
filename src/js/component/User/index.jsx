/**
* User
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    return (
      <div className="user-root">
        <h1>Hi, {this.props.name}</h1>
        {this.props.children}
      </div>
    );
  }
}

User.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

export default User;
