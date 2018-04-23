/* eslint no-return-assign:0 */
import React, { Component } from 'react';
import './InlineVideo.styl';

export default class InlineVideo extends Component {
  video:HTMLVideoElement;
  componentDidMount() {
    console.log('componentDidMount');
    // this.video.play();
    console.log(this.video);
  }
  render() {
    return (
      <section className="inline-video">
        <video playsInline muted autoPlay loop ref={node => this.video = node}>
          <source src="video/home.mp4"/>
        </video>
      </section>
    );
  }
}
