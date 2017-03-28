import React from 'react';
import { render } from 'react-dom';

import {
    HashRouter as Router,
    Route,
    Link,
} from 'react-router-dom';


import App from './component/App.jsx';
import Child from './component/Child.jsx';
import Navigation from './component/Navigation.jsx';


import '../css/app.styl';


const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

render((
    <Router>
        <div className="wrap">
            <Navigation />
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/Child" component={Child}/>
        </div>
  </Router>
), document.getElementById('app'));


/* ReactDOM.render(
  <App name="milkmidi"/>,
  document.getElementById("app")
);*/
console.log('__DEV__', __DEV__);
try {
    module.hot.accept();
} catch (error) {

}
