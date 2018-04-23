/* eslint no-shadow:0 */
import React, { PureComponent } from 'react';
import isBoolean from 'lodash/isBoolean';
import PropTypes from 'prop-types';
import { isWebView, isFBWebView, isLineWebView } from './device';

import './Device.styl';


const Item = ({ value, col = 4, label }) => {
  let boolStyle = '';
  if (isBoolean(value)) {
    boolStyle = value.toString();
  }
  return (<div className={`device-item col-md-${col} ${boolStyle}`}>
    <div className="inner">
      <label className="label">{label}</label>
      <div className="value">{`${value}`}</div>
    </div>
  </div>);
};
Item.propTypes = {
  col: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.any,
};


class Device extends PureComponent {
  state = {
    userAgent: navigator.userAgent,
    windowSize: `${window.innerWidth} x ${window.innerHeight}`,
    deviceOrientationEvent: !!window.DeviceOrientationEvent,
    deviceMotionEvent: !!window.DeviceMotionEvent,
    desktop: device.desktop(),
    mobile: device.mobile(),
    tablet: device.tablet(),
    ipad: device.ipad(),
    iphone: device.iphone(),
    android: device.android(),
    androidTablet: device.androidTablet(),
    isWebView,
    isFBWebView,
    isLineWebView,
  }
  resizeHandler = () => {
    this.setState({
      windowSize: `${window.innerWidth} x ${window.innerHeight}`,
    });
  }
  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }
  render() {
    const {
      userAgent,
      windowSize,
      deviceOrientationEvent,
      deviceMotionEvent,
      desktop,
      mobile,
      tablet,
      isWebView,
      isFBWebView,
      isLineWebView,
    } = this.state;
    return (
      <div className="device-root container">
        <div className="card">
          <div className="card-header"></div>
          <div className="card-block">
            <div className="row">
              <Item label="user_agent" col={12} value={userAgent} />
            </div>
            <div className="row">
              <Item label="windowSize" value={windowSize} />
              <Item label="deviceOrientationEvent" value={deviceOrientationEvent} />
              <Item label="deviceMotionEvent" value={deviceMotionEvent} />
            </div>
            <div className="row">
              <Item label="desktop" value={desktop} />
              <Item label="mobile" value={mobile} />
              <Item label="tablet" value={tablet} />
            </div>
            <div className="row">
              <Item label="isWebView" value={isWebView} />
              <Item label="isFBWebView" value={isFBWebView} />
              <Item label="isLineWebView" value={isLineWebView} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Device;
