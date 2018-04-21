/* eslint max-len: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLoading, sendMessage } from '../../action';
import './Mobile.styl';

class Mobile extends Component {
  static propTypes ={
    messages: PropTypes.arrayOf(String),
    loading: PropTypes.bool,
    onSendMessage: PropTypes.func,
    onStartLoading: PropTypes.func,
  }
  render() {
    const {
      messages, onSendMessage, onStartLoading, loading,
    } = this.props;
    return (
      <section className="mobile-container">
        <button onClick={() => onSendMessage(Math.random().toString())}>sendMessage</button>
        <button onClick={() => onStartLoading()}>onStartLoading</button>
        <p>{loading.toString()}</p>
        {
          messages.map((msg, index) => <p key={index.toString()}>{msg}</p>)
        }
      </section>

    );
  }
}

const mapStateToProps = state => ({
  messages: state.user.messages,
  loading: state.main.loading,
});

const mapDispatchToProps = dispatch => ({
  onSendMessage(msg:string) {
    dispatch(sendMessage(msg));
  },
  onStartLoading: () => dispatch(startLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
