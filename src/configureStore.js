/* eslint no-underscore-dangle:0 */
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import epic from './epics';


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
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer());
    });
    module.hot.accept('./epics', () => {
      const newRootEpic = require('./epics').default;
      epicMiddleware.replaceEpic(newRootEpic);
    });
  }

  return store;
}
