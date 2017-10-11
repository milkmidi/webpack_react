export const pages = [
  'Main',
  'Child',
];

export const nextIndex = index => ++index % pages.length;

export const indexFromPath = (path) => {
  path = path === '/' ? '/Main' : path;
  return pages.indexOf(path.substr(1));
};
