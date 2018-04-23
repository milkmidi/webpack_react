import Device from '@/component/Device';
import GetUserMedia from '@/component/GetUserMedia';
import InlineVideo from '@/component/InlineVideo';
import Mobile from '@/container/Mobile';

const routers = [

  {
    path: '/',
    component: Mobile,
    exact: true,
  },
  {
    path: '/getUserMedia',
    component: GetUserMedia,
    exact: true,
  },
  {
    path: '/InlineVideo',
    component: InlineVideo,
    exact: true,
  },
  {
    path: '/Device',
    component: Device,
    exact: true,
  },

];

export default routers;
