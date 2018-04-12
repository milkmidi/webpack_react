
const DEFAULT_STATE = {
  messages: ['3q9527'],
};

const main = (state = DEFAULT_STATE, action) => {
  switch (action.type) {

    case 'sendMessage': {
      const messages = state.messages.concat();
      messages.push(action.data);
      return { messages };
    }
    default:
      return state;
  }
};

export default main;

