import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './index.styl';

const delay = (time = 1000) => new Promise(resolve => setTimeout(resolve, time));

export default class Child extends PureComponent {
  state = {
    count: 1,
  };

  clickHandler = async () => {
    let { count } = this.state;
    count += 1;
    this.setState({ count });
    console.log(1);
    await delay();
    count += 1;
    this.setState({ count });
    console.log(2);
  }
  render() {
    console.log('render');
    return (
      <div className="child_root">
        <h1>Hello Child</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.clickHandler}>ChildButton</button>
      </div>
    );
  }
}
Child.propTypes = {
  name: PropTypes.string,
};
