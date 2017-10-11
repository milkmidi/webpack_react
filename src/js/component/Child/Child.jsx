import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $script from 'scriptjs';
import './Child.styl';
import { setName } from '../../reduxjs/action';


@connect(state => ({
  name: state.basic.name,
}), dispatch => ({
  setName: name => dispatch(setName(name)),
}))
export default class Child extends PureComponent {
  state = {
    count: 1,
  };
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
  }
  componentUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }
  resizeHandler() {

  }
  clickHandler() {
    /* let { count } = this.state;
    count += 1;
    this.setState({ count });
    console.log(1);
    await delay();
    count += 1;
    this.setState({ count });
    console.log(3); */
    this.props.setName(Date.now().toString());
  }
  render() {
    return (
      pug`
      .child-root
        h1 ${this.props.name}
        h2 ${this.state.count}
        button(onClick=${this.clickHandler}) Button
      `
    );
  }
}
Child.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
};
