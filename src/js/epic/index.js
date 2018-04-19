import { combineEpics } from 'redux-observable';

import * as main from './main';

const mainValues = Object.keys(main).map(e => main[e]);
export default combineEpics(...mainValues);
