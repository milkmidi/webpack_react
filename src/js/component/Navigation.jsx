/*eslint-disable */
import React from 'react';
import {
    // HashRouter as Router,
    Router,
    Route,
    NavLink,
    Link,
} from 'react-router-dom';
import navigation from './navigation.styl';
/*eslint-enable */
/* export default class Navigation extends React.Component {

    render() {
        return (
        <Route render={({location: pathname, history}) => (
        <div className="navigation_root">
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/child">child</Link></li>
            </ul>
            <hr/>
        </div>
        )}
        );
    }
}
*/

/* function pathname() {
    console.log('pathname');
}
function history() {
    console.log('history');
}*/
const Navigation = () => (
    <Route render={({ location: pathname, history }) => (
        <div className="navigation_root">
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/child">child</NavLink></li>
            </ul>
            <hr/>
        </div>
     )}/>
);

export default Navigation;
