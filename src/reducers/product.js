import { RECEIVE_PRODUCTS } from '../actions';
import { type ProductType } from '../services/api';

const DEFAULT_STATE:ProductType[] = [];

const product = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS: {
      return [...action.products];
    }
    default:
      return state;
  }
};

export default product;
