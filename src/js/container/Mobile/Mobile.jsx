/* eslint max-len: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage } from '../../action';
import './Mobile.styl';

class Mobile extends Component {
  static propTypes ={
    messages: PropTypes.arrayOf(String),
    onSendMessage: PropTypes.func,
  }
  render() {
    const { messages, onSendMessage } = this.props;
    return (
      <div className="mobile-container">
        <button onClick={() => onSendMessage(Math.random().toString())}>sendMessage</button>
        {
          messages.map((msg, index) => <p key={index.toString()}>{msg}</p>)
        }
      </div>

    );
  }
}

const mapStateToProps = state => ({
  messages: state.main.messages,
});

const mapDispatchToProps = dispatch => ({
  onSendMessage(msg:string) {
    dispatch(sendMessage(msg));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
