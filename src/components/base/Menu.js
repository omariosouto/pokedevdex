import React from 'react';
import { Link } from 'react-router';

const Menu = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/example-page/">Example Page</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
};


export default Menu;
