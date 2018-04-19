export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = (message:string) => ({
  type: SEND_MESSAGE,
  data: message,
});

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const startLoading = () => ({ type: START_LOADING });
export const endLoading = () => ({ type: END_LOADING });
