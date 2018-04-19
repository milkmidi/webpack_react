import { START_LOADING, END_LOADING } from '../action';

const DEFAULT_STATE = {
  loading: false,
};

const main = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case START_LOADING: {
      return {
        loading: true,
      };
    }
    case END_LOADING: {
      return {
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default main;

