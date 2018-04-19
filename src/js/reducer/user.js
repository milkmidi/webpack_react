// import Immutable from 'immutable';
import { SEND_MESSAGE } from '../action';

const DEFAULT_STATE = {
  messages: ['3q9527'],
  name: '',
};

/* const DEFAULT_STATE = {
  messages: ['3q9527'],
  ping: false,
}; */

const user = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const messages = state.messages.concat();
      messages.push(action.data);
      return {
        ...state,
        messages,
      };
    }
    default:
      return state;
  }
};

export default user;

