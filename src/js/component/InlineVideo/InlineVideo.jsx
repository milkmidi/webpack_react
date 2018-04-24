import React, { Component } from 'react';
import enableInlineVideo from 'iphone-inline-video';
import './InlineVideo.styl';

export default class InlineVideo extends Component {
  video:HTMLVideoElement;
  componentDidMount() {
    enableInlineVideo(this.video0);
    enableInlineVideo(this.video1);
  }
  render() {
    return (
      <section className="inline-video container">
        <div className="row">
          <div className="col">
            <video
              autoPlay
              muted
              loop
              playsInline
              src="https://rawgit.com/bower-media-samples/big-buck-bunny-480p-30s/master/video.mp4"
              ref={(node) => { this.video0 = node; }}
              ></video>
          </div>
          <div className="col">
            <video playsInline muted autoPlay loop ref={(node) => { this.video1 = node; }}>
              <source src="video/home.mp4"/>
            </video>
          </div>
        </div>
      </section>
    );
  }
}
