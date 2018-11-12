import {
  START_LOADING,
  END_LOADING,
  TOGGLE_NAVIGATION,
  HIDE_NAVIGATION,
} from '../actions';

const DEFAULT_STATE = {
  loading: false,
  showNavigation: false,
};

const main = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case END_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    case TOGGLE_NAVIGATION: {
      return {
        ...state,
        showNavigation: !state.showNavigation,
      };
    }
    case HIDE_NAVIGATION: {
      return {
        ...state,
        showNavigation: false,
      };
    }
    default:
      return state;
  }
};

export default main;
