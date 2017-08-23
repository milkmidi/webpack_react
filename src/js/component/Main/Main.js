import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'milkmidi',
      list: [1, 2, 3, 4, 5, 6],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  clickHandler() {
    this.setState({ label: `${Date.now()}` });
  }

  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    const listItems = this.state.list.map(number => <li key={number.toString()}>{number}</li>);
    return (
      <div className="app">
        <h1>{this.state.label}</h1>
        <ul>{listItems}</ul>
        <p>{this.state.value}</p>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
