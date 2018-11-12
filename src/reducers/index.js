import { combineReducers } from 'redux';
import main from './main';
import user from './user';
import product from './product';

export default function createReducer() {
  return combineReducers({
    main,
    user,
    product,
  });
}
