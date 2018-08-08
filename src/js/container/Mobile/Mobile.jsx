/* eslint max-len: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLoading, sendMessage, getAllProducts } from '../../action';
import './Mobile.styl';
import { type ProductType } from '../../service/api';

type Props = {
  messages: string[],
  loading: boolean,
  onSendMessage: Function,
  onStartLoading: Function,
  onFetchProduct: Function,
}

class Mobile extends Component<void, Props> {
  static propTypes ={
    messages: PropTypes.arrayOf(String),
    products: PropTypes.array,
    loading: PropTypes.bool,
    onSendMessage: PropTypes.func,
    onStartLoading: PropTypes.func,
    onFetchProduct: PropTypes.func,
  }
  render() {
    const {
      messages, onSendMessage, onStartLoading, loading, onFetchProduct,
      products,
    } = this.props;
    return (
      <div className="container">
        <section className="mobile-container">
          <button className="primary-btn btn" onClick={() => onSendMessage(Math.random().toString())}>sendMessage</button>
          <button className="primary-btn btn" onClick={() => onStartLoading()}>onStartLoading</button>
          <button className="primary-btn btn" onClick={() => onFetchProduct()}>onFetchProduct</button>
          {
            products.map((o:ProductType) => <div key={o.id}>{o.title}</div>)
          }
          <p>props.loading:{loading.toString()}</p>
          {
            messages.map((msg, index) => <p key={index.toString()}>{msg}</p>)
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.user.messages,
  loading: state.main.loading,
  products: state.product,
});

const mapDispatchToProps = dispatch => ({
  onSendMessage(msg:string) {
    dispatch(sendMessage(msg));
  },
  onStartLoading: () => dispatch(startLoading()),
  onFetchProduct: () => dispatch(getAllProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
