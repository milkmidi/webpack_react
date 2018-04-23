import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "InlineVideo" */'./InlineVideo.jsx'),
  loading: () => null,
});
