'use strict';

import React from 'react';
import { Link } from 'react-router';
import Menu from './base/Menu';
import Footer from './base/Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        
        <Menu />

        <div className="container">
          <header>
            <Link to="/">
              <img className="logo center-block" src="https://facebook.github.io/react/img/logo.svg"/>
            </Link>
          </header>
        </div>

        <div className="app-content">{this.props.children}</div>
        
        <Footer />
      </div>
    );
  }
}
