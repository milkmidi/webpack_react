import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "Device" */'./Device.jsx'),
  loading: () => null,
});
