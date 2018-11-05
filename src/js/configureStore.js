/* eslint no-underscore-dangle:0 */
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import epic from './epic';


export default function configureStore() {
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    reducer(),
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );
  // const store = createStore(reducer, applyMiddleware(epicMiddleware));
  epicMiddleware.run(epic);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default;
      store.replaceReducer(nextRootReducer());
    });
    /* module.hot.accept('./epic', () => {
      const newRootEpic = require('./epic').default;
      epicMiddleware.replaceEpic(newRootEpic);
    }); */
  }

  return store;
}
