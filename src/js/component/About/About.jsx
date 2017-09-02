
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isBoolean from 'lodash/isBoolean';


import './About.styl';

const Item = ({ col, label, value }) => {
  let boolStyle = '';
  if (isBoolean(value)) {
    boolStyle = value.toString();
  }
  return (
    <div className={`device__item col-${col} ${boolStyle}`}>
      <div className="inner">
        <label>{label}</label>
        <p>{`${value}`}</p>
      </div>
    </div>
  );
};
Item.propTypes = {
  col: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};
Item.defaultProps = {
  col: 6,
};

class DeviceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowSize: 0,
      devicePixelRatio: window.devicePixelRatio,
    };
    this.resizeHandler = this.resizeHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
    this.resizeHandler();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }
  resizeHandler() {
    const state = this.state;
    state.windowSize = `${window.innerWidth} x ${window.innerHeight}`;
    this.setState(state);
  }
  render() {
    return (
      <div className="device-info-root">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>Device Info</h2>
            </div>
            <div className="card-block">
              <div className="row">
                <Item label='window size' value={this.state.windowSize} />
                <Item label='devicePixelRatio' value={this.state.devicePixelRatio} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeviceInfo;
