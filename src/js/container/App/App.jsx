import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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

const InlineVideo = Loadable({
  loader: () => import(/* webpackChunkName: "InlineVideo" */'@/component/InlineVideo'),
  loading: LoadingComponent,
});

const App = () => (
  <Router>
    <main>
      <Switch>
        <Route exact path="/" component={Mobile}/>
        <Route exact path="/getUserMedia" component={GetUserMedia}/>
        <Route exact path="/InlineVideo" component={InlineVideo}/>
      </Switch>
      <Navigation />
    </main>
  </Router>
);

export default App;
