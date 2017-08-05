import React, { Component } from 'react';

export default class Main extends Component {
  timerID = -1;
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isLoggedIn: false,
      list: [1, 2, 3, 4, 5, 6],
      value: 'vv',
    };
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }
  loginHandler = () => {
    console.log('1');
    this.setState({ isLoggedIn: true });
  }
  stopTimer = () => {
    clearInterval(this.timerID);
    this.timerID = -1;
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    const listItems = this.state.list.map(number => <li key={number.toString()}>{number}</li>);
    return (
      <div className="app">
        <h1>Hi, React</h1>
        <ul>{listItems}</ul>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <label>
            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <p>{this.state.value}</p>
        <button onClick={this.loginHandler}>{this.state.isLoggedIn ? 'logout' : 'login'}</button>
      </div>
    );
  }
}
