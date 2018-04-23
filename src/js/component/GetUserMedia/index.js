import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "GetUserMedia" */'./GetUserMedia.jsx'),
  loading: () => null,
});
