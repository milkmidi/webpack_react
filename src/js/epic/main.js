import { START_LOADING, END_LOADING } from '../action';

export const startLoadingEpic = action$ =>
  action$.ofType(START_LOADING)
    .delay(1000)
    .mapTo({ type: END_LOADING });
