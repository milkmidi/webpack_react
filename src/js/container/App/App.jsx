import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationContainer from '@/container/NavigationContainer';
import routerConfig from '@/router';
import './App.styl';


const App = () => (
  <main>
    <NavigationContainer />
    <div className="view">
      <Switch>
        {
          routerConfig.map(route => <Route key={route.path} {...route} />)
        }
      </Switch>
    </div>
  </main>
);

export default App;
