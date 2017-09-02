
const DEFAULT_STATE = {
  name: 'milkmidi',
};

const basic = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'setName':
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

export default basic;

