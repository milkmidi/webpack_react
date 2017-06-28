import React from 'react';
// import { render } from 'react-dom';
import { render } from 'react-snapshot';
import {
    // HashRouter as Router,
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';


import Main from './component/Main';
import Child from './component/Child';
import Navigation from './component/Navigation';

// import '../css/app.styl';

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
      <Route exact path="/" component={Main}/>
      <Route path="/about" component={About}/>
      <Route path="/Child" component={Child}/>
    </div>
  </Router>
);

module.exports = App;
/* render(<App/>, document.getElementById('root'));

if (module && module.hot) {
  module.hot.accept();
}*/

