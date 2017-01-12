'use strict';

import React from 'react';
import {Link}        from 'react-router';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header-main">
        <div className="container">

          <nav className="navbar navbar-default">
            <div className="container-fluid">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand logo" href="#/"><img src="assets/images/Logo.jpg"/></a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/style-guide">Style guide</Link></li>
                  <li><a href="#/">Link</a></li>
                  <li className="dropdown">
                    <a href="#/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Links Dropdown <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#/">Link 1</a></li>
                      <li><a href="#/">Link 2</a></li>
                      <li><a href="#/">Link 3</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }

}

export default Header;
