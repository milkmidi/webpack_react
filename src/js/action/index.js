export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = (message:string) => ({
  type: SEND_MESSAGE,
  data: message,
});

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const SHOW_NAVIGATION = 'SHOW_NAVIGATION';
export const HIDE_NAVIGATION = 'HIDE_NAVIGATION';
export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';

export const showNavigation = () => ({ type: SHOW_NAVIGATION });
export const hideNavigation = () => ({ type: HIDE_NAVIGATION });
export const toggleNavigation = () => ({ type: TOGGLE_NAVIGATION });

export const startLoading = () => ({ type: START_LOADING });
export const endLoading = () => ({ type: END_LOADING });
