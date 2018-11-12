import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "Mobile" */'./Mobile.jsx'),
  loading: () => null,
});
