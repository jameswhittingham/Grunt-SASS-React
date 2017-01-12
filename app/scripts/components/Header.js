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
                <Link to="/" className="navbar-brand logo"><img src="assets/images/Logo.jpg"/></Link>
              </div>


              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/style-guide">Style guide</Link></li>
                  <li><Link to="/"  href="#/">Link</Link></li>
                  <li className="dropdown">
                    <a href="#/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Links Dropdown <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><Link to="/" href="#/">Link 1</Link></li>
                      <li><Link to="/" href="#/">Link 2</Link></li>
                      <li><Link to="/" href="#/">Link 3</Link></li>
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
