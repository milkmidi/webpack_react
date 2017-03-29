import React from 'react';

import { Link } from 'react-router-dom';// eslint-disable-line no-unused-vars

export default class Navigation extends React.Component {
    /* constructor(prop) {
        super(prop);
    }*/
    render() {
        return (
        <div className="navigation_root">
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/child">child</Link></li>
            </ul>
            <hr/>
        </div>
        );
    }
}
