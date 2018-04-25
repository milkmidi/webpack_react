import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import $script from 'scriptjs';
// import enableInlineVideo from 'iphone-inline-video';
import './InlineVideo.styl';


export default class InlineVideo extends Component {
  queue : createjs.LoadQueue;
  loader: PIXI.loaders.Loader


  startPIXILoader() {
    this.loader = new PIXI.loaders.Loader();
    this.loader.add('home', 'video/home.mp4');
    this.loader.onComplete.once(() => {
      console.log('pixi loader complete');
      console.log(this.loader.resources.home.data);
      this.video3.src = 'video/home.mp4';

      const canvas = document.getElementById('canvas');
      this.app = new PIXI.Application(320, 240, { transparent: true, view: canvas });

      const texture = PIXI.Texture.fromVideo(this.video3);
      // const texture = PIXI.Texture.fromVideo('video/home.mp4');
      // create a new Sprite using the video texture (yes it's that easy)
      const videoSprite = new PIXI.Sprite(texture);
      // Stetch the fullscreen
      videoSprite.width = this.app.screen.width;
      videoSprite.height = this.app.screen.height;

      this.app.stage.addChild(videoSprite);
    });
    this.loader.load();
  }
  startPreloadJS() {
    $script('https://code.createjs.com/1.0.0/preloadjs.min.js', () => {
      const queue = new createjs.LoadQueue();
      this.queue = queue;
      queue.on('complete', () => {
        this.video2.src = this.queue.getResult('video00').src;
      });
      queue.loadManifest([
        { id: 'video00', src: 'video/home.mp4' },
      ]);
    });
  }

  componentDidMount() {
    this.startPIXILoader();
    this.startPreloadJS();
  }
  componentWillUnmount() {
    if (this.queue) {
      this.queue.removeAll();
      this.queue = null;
      delete this.queue;
    }
    if (this.app) {
      this.app.destroy();
      this.app = null;
      delete this.app;
    }
  }
  render() {
    return (
      <section className="inline-video container">
        <div className="row">
          <div className="col">
            <h3>video tag</h3>
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
            <h3>video tag</h3>
            <video playsInline muted autoPlay loop ref={(node) => { this.video1 = node; }}>
              <source src="video/home.mp4"/>
            </video>
          </div>
          <div className="col">
            <h3>video tag + preloadjs preferXHR</h3>
            <video
              autoPlay
              muted
              loop
              playsInline
              ref={(node) => { this.video2 = node; }}
              ></video>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>PIXI VideoTexture</h3>
            <canvas id="canvas"></canvas>
          </div>
          <div className="col">
            <h3>PIXIJS Loader</h3>
            <video
              autoPlay
              muted
              loop
              playsInline
              ref={(node) => { this.video3 = node; }}
              ></video>
          </div>
        </div>
      </section>
    );
  }
}
