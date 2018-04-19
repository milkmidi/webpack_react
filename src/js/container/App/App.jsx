import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Navigation from '@/component/Navigation';


const LoadingComponent = () => <div>Loading...</div>;

const GetUserMedia = Loadable({
  loader: () => import(/* webpackChunkName: "GetUserMedia" */'@/component/GetUserMedia'),
  loading: LoadingComponent,
});

const Mobile = Loadable({
  loader: () => import(/* webpackChunkName: "Mobile" */'@/container/Mobile'),
  loading: LoadingComponent,
});

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Mobile}/>
      <Route exact path="/getUserMedia" component={GetUserMedia}/>
    </Switch>
    <Navigation />
  </main>
);

export default App;
