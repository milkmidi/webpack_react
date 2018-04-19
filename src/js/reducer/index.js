import { combineReducers } from 'redux';
import main from './main';
import user from './user';

export default function createReducer() {
  return combineReducers({
    main,
    user,
  });
}
