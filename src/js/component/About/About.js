/* global WURFL */
/**
* DeviceInfo
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isBoolean from 'lodash/isBoolean';

// import { isWebView, isFBWebView, isLineWebView } from '../../milkmidi/util/device.util';

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
      /* devicePixelRatio: window.devicePixelRatio,
      user_agent: navigator.userAgent,
      deviceOrientationEvent: !!window.DeviceOrientationEvent,
      deviceMotionEvent: !!window.DeviceMotionEvent, */
      desktop: false,
      mobile: false,
      tablet: false,
      ipad: false,
      iphone: false,
      android: false,
      androidTablet: false,
      isWebView: false,
      isFBWebView: false,
      isLineWebView: false,
      wurfl: '',
      /* windowSize: 0,
      devicePixelRatio: window.devicePixelRatio,
      user_agent: navigator.userAgent,
      deviceOrientationEvent: !!window.DeviceOrientationEvent,
      deviceMotionEvent: !!window.DeviceMotionEvent,
      desktop: device.desktop(),
      mobile: device.mobile(),
      tablet: device.tablet(),
      ipad: device.ipad(),
      iphone: device.iphone(),
      android: device.android(),
      androidTablet: device.androidTablet(),
      isWebView: false,
      isFBWebView: false,
      isLineWebView: false,
      wurfl: '', */
      /* isWebView: isWebView(),
      isFBWebView: isFBWebView(),
      isLineWebView: isLineWebView(), */
      // wurfl: JSON.stringify(WURFL),
    };
  }
  resizeHandler = () => {
    const state = this.state;
    state.windowSize = `${window.innerWidth} x ${window.innerHeight}`;
    this.setState(state);
  }
  componentDidMount() {
    // window.addEventListener('resize', this.resizeHandler);
    // this.resizeHandler();
  }
  componentWillUnmount() {
    // window.removeEventListener('resize', this.resizeHandler);
  }
  render() {
    return (
      <div className="device-info-root" style={{ paddingTop: '50px' }}>
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
              {/*  <div className="row">
                <Item label='deviceOrientationEvent' value={this.state.deviceOrientationEvent} />
                <Item label='deviceMotionEvent' value={this.state.deviceMotionEvent} />
              </div>
              <div className="row">
                <Item col={4} label='desktop' value={this.state.desktop} />
                <Item col={4} label='mobile' value={this.state.mobile} />
                <Item col={4} label='tablet' value={this.state.tablet} />
              </div>
              <div className="row">
                <Item col={4} label='ipad' value={this.state.ipad} />
                <Item col={4} label='iphone' value={this.state.iphone} />
                <Item col={4} label='androidTablet' value={this.state.androidTablet} />
              </div>
              <div className="row">
                <Item col={4} label='webView' value={this.state.isWebView} />
                <Item col={4} label='FBWebView' value={this.state.isFBWebView} />
                <Item col={4} label='lineWebView' value={this.state.isLineWebView} />
              </div>
              <div className="row">
                <Item col={12} label='wurfl' value={this.state.wurfl} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeviceInfo;
