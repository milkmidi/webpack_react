import {
  delay, mapTo, switchMap, map,
} from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import {
  END_LOADING, START_LOADING, GET_ALL_PRODUCTS, receiveProducts,
} from '../action';
import api from '../service/api';


export const startLoadingEpic = action$ => action$.pipe(
  ofType(START_LOADING),
  delay(1000),
  mapTo({ type: END_LOADING }),
);

export const fetchProducts = action$ => action$.pipe(
  ofType(GET_ALL_PRODUCTS),
  switchMap(() => fromPromise(api.getProducts())
    .pipe(
      map(response => receiveProducts(response)),
    )),
);
