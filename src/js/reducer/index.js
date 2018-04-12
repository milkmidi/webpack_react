import { combineReducers } from 'redux';
import main from './main';

export default function createReducer() {
  return combineReducers({
    main,
  });
}
