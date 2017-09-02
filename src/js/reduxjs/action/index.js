export const init = () => ({
  type: 'init',
  isLoading: false,
});
export const setName = name => ({
  type: 'setName',
  name,
});
