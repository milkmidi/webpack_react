import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Child.styl';

// const PIXI = require('pixi.js');

const delay = (time = 1000) => new Promise(resolve => setTimeout(resolve, time));

export default class Child extends PureComponent {
  state = {
    count: 1,
  };


  componentDidMount() {
    /* if (typeof window !== 'undefined') {
      const app = new PIXI.Application(800, 600, { backgroundColor: 0x1099bb });

      document.querySelector('.child_root').appendChild(app.view);

      const basicText = new PIXI.Text('Basic text in pixi');
      basicText.x = 30;
      basicText.y = 90;

      app.stage.addChild(basicText);

      const style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'], // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440,
      });

      const richText = new PIXI.Text('Rich text with a lot of options and across multiple lines', style);
      richText.x = 30;
      richText.y = 180;

      app.stage.addChild(richText);
    } */
  }

  clickHandler = async () => {
    let { count } = this.state;
    count += 1;
    this.setState({ count });
    console.log(1);
    await delay();
    count += 1;
    this.setState({ count });
    console.log(3);
  }
  render() {
    return (
      <div className="child_root">
        <h1>Hello Child</h1>

        <h2>{this.state.count}</h2>
        <button onClick={this.clickHandler}>ChildButton</button>
      </div>
    );
  }
}
Child.propTypes = {
  name: PropTypes.string,
};
