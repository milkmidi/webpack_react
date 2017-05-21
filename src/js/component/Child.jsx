import React from 'react';
import PropTypes from 'prop-types';

import './child.styl';

export default class Child extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      count: 1,
    };
  }
  clickHandler = () => {
    console.log('click');
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div className="child_root">
          <h1>Hello Child, {this.props.name}</h1>
          <h2>{this.state.count}</h2>
          <button onClick={this.clickHandler}>ChildButton</button>
      </div>
    );
  }
}
Child.propTypes = {
  name: PropTypes.string,
};
