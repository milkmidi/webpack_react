/* eslint no-return-assign:0 */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import $script from 'scriptjs';
import * as PIXI from 'pixi.js';
import './GetUserMedia.styl';


class GetUserMedia extends Component {
  canvas:HTMLCanvasElement;
  app:PIXI.Application;

  getUserMedia():Promise<void> {
    const constraints = {
      audio: false,
      video: true,
    };
    return navigator.mediaDevices.getUserMedia(constraints);
  }
  initPIXI() {
    const app = new PIXI.Application(800, 600, { transparent: true, view: this.canvas });
    this.app = app;

    const texture = PIXI.Texture.fromVideo(document.querySelector('video'));

    // create a new Sprite using the video texture (yes it's that easy)
    const videoSprite = new PIXI.Sprite(texture);
    videoSprite.filters = [new PIXI.filters.BlurFilter(16, 16)];

    // Stetch the fullscreen
    videoSprite.width = app.screen.width;
    videoSprite.height = app.screen.height;

    app.stage.addChild(videoSprite);

    const graphics = new PIXI.Graphics();

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

    const mask = new PIXI.Graphics();
    mask.beginFill(0);
    mask.drawRect(0, 0, 400, 600);
    videoSprite.mask = mask;

    app.ticker.add(() => {
      graphics.x = Math.sin(new Date().getTime() / 500) * 100 + 400;
    });
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
  }
  componentWillUnmount() {
    if (this.app) {
      this.app.destroy();
      this.app = null;
      delete this.app;
    }
  }
  render() {
    return (
      <section className="get-user-media-root">
        <video playsInline autoPlay ref={dom => this.video = dom}></video>
        <canvas ref={dom => this.canvas = dom} />
      </section>
    );
  }
}

GetUserMedia.propTypes = {
};
GetUserMedia.defaultProps = {
};

export default GetUserMedia;
