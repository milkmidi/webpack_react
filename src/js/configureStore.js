import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import epic from './epic';


export default function configureStore() {
  let composeEnhancers = compose;
  // eslint-disable-next-line
  if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    // eslint-disable-next-line
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const epicMiddleware = createEpicMiddleware(epic);
  const store = createStore(
    reducer(),
    composeEnhancers(applyMiddleware(epicMiddleware)),
  );
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('./reducer').default;
      store.replaceReducer(nextRootReducer());
    });
    module.hot.accept('./epic', () => {
      const newRootEpic = require('./epic').default;
      epicMiddleware.replaceEpic(newRootEpic);
    });
  }

  return store;
}
