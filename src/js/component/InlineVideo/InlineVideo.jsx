import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InlineVideo.styl';

export default class InlineVideo extends Component {
  render() {
    return (
      <section className="inline-video">
        <video playsInline muted autoPlay loop>
          <source src="video/home.mp4"/>
        </video>
      </section>

    );
  }
}
