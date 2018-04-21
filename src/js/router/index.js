import React from 'react';
import Loadable from 'react-loadable';

const LoadingComponent = () => <div>Loading...</div>;

const GetUserMedia = Loadable({
  loader: () => import(/* webpackChunkName: "GetUserMedia" */'@/component/GetUserMedia'),
  loading: LoadingComponent,
});

const Mobile = Loadable({
  loader: () => import(/* webpackChunkName: "Mobile" */'@/container/Mobile'),
  loading: LoadingComponent,
});

const InlineVideo = Loadable({
  loader: () => import(/* webpackChunkName: "InlineVideo" */'@/component/InlineVideo'),
  loading: LoadingComponent,
});

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
];

export default routers;
