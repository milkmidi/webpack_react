/*eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import {
    HashRouter as Router,
    // BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
/*eslint-enable */


import Index from './component/Index.jsx';
import Child from './component/Child.jsx';
import Navigation from './component/Navigation.jsx';// eslint-disable-line

import '../css/app.styl';

const AboutRendering = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const About = ({ match }) => (
  <div>
    <h2>About1234d5,{match.url}</h2>
    <Link to={`${match.url}/rendering`}>
      Rendering with React
    </Link>

    <Route path={`${match.url}/:topicId`} component={AboutRendering}/>
  </div>
);

const App = () => (
  <Router>
    <div className="wrap">
      <Navigation />
      <Route exact path="/" component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="/Child" component={Child}/>
    </div>
  </Router>
);

render(<App/>, document.getElementById('app'));

// console.log('__DEV__', __DEV__);
try {
  module.hot.accept();
} catch (error) {

}
