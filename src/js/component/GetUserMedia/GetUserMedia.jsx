/* eslint no-return-assign:0 */
/* global CCapture */
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import $script from 'scriptjs';
import * as PIXI from 'pixi.js';
import './GetUserMedia.styl';
// import styled from 'styled-components';


class GetUserMedia extends PureComponent {
  canvas:HTMLCanvasElement;
  app:PIXI.Application;

  state = {
    showCaptureButton: false,
    startCapture: false,
  }
  startCapture = () => {
    this.setState({
      startCapture: !this.state.startCapture,
    }, () => {
      if (this.state.startCapture) {
        console.log('start');
        this.capturer = new CCapture({
          verbose: false,
          display: true,
          framerate: 12,
          format: 'webm',
          workersPath: './js/',
          timeLimit: 10,
          frameLimit: 0,
          autoSaveTime: 0,
          onProgress(p) { console.log(p); },
        });
        this.capturer.start();
      } else {
        console.log('stop');
        this.capturer.stop();
        this.capturer.save((blob) => {
          console.log(blob);
        });
      }
    });
  }
  getUserMedia():Promise<void> {
    const constraints = {
      audio: false,
      video: true,
    };
    return navigator.mediaDevices.getUserMedia(constraints);
  }
  initPIXI() {
    const width = this.video.clientWidth;
    const height = this.video.clientHeight;
    const app = new PIXI.Application(
      width, height,
      {
        transparent: true,
        view: this.canvas,
        antialias: true,
        autoStart: false,
      },
    );
    this.app = app;

    const texture = PIXI.Texture.fromVideo(this.video);
    const videoSprite = new PIXI.Sprite(texture);
    this.videoSprite = videoSprite;
    videoSprite.filters = [new PIXI.filters.BlurFilter(4, 4)];
    videoSprite.width = app.screen.width;
    videoSprite.height = app.screen.height;
    app.stage.addChild(videoSprite);

    const graphics = new PIXI.Graphics();
    this.graphics = graphics;

    // set a fill and line style
    graphics.beginFill(0xFF3300);
    graphics.lineStyle(4, 0xffd900, 1);

    // draw a shape
    graphics.moveTo(50, 50);
    graphics.lineTo(250, 50);
    graphics.lineTo(100, 100);
    graphics.lineTo(50, 50);
    graphics.endFill();
    app.stage.addChild(graphics);
    this.startRender();
  }
  startRender =() => {
    this.graphics.x = Math.sin(new Date().getTime() / 500) * 100;
    this.app.render();
    if (this.capturer && this.state.startCapture) {
      this.capturer.capture(this.canvas);
    }
    requestAnimationFrame(this.startRender);
  }
  async componentDidMount() {
    try {
      const stream = await this.getUserMedia();
      this.video.srcObject = stream;
      this.video.onloadedmetadata = () => {
        this.video.play();
        this.initPIXI();
      };
    } catch (error) {
      alert(error);
    }

    $script('https://www.clicktorelease.com/code/conway3d_ccapture/js/CCapture.all.min.js', () => {
      this.setState({
        showCaptureButton: true,
      });
    });
  }
  componentWillUnmount() {
    if (this.app) {
      this.app.destroy();
      this.app = null;
      delete this.app;
    }
  }
  render() {
    const { showCaptureButton, startCapture } = this.state;
    return (
      <section className="get-user-media-root">
        <video playsInline autoPlay ref={dom => this.video = dom}></video>
        <canvas ref={dom => this.canvas = dom} />
        {
          showCaptureButton
            ? <button onClick={this.startCapture}>{startCapture ? 'Stop' : 'Capture'}</button>
            : null
        }
      </section>
    );
  }
}

GetUserMedia.propTypes = {
};
GetUserMedia.defaultProps = {
};

export default GetUserMedia;
