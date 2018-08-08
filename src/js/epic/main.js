import { END_LOADING, START_LOADING, GET_ALL_PRODUCTS, receiveProducts } from '../action';
import api from '../service/api';

export const startLoadingEpic = action$ =>
  action$.ofType(START_LOADING)
    .delay(3000)
    .mapTo({ type: END_LOADING });

export const fetchProducts = action$ =>
  action$
    .ofType(GET_ALL_PRODUCTS)
    .delay(1000)
    .switchMap(() => api.getProducts().map(receiveProducts));
