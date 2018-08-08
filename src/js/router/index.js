import Device from '@/component/Device';
import Mobile from '@/container/Mobile';

const routers = [

  {
    path: '/',
    component: Mobile,
    exact: true,
  },
  {
    path: '/Device',
    component: Device,
    exact: true,
  },

];

export default routers;
