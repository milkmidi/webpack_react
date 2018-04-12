import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';


export default function configureStore() {
  const middleware = [
    thunk,
  ];
  const store = createStore(
    reducer(),
    applyMiddleware(...middleware),
  );
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('./reducer').default;
      store.replaceReducer(nextRootReducer());
    });
  }

  return store;
}
