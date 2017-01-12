'use strict';

import React from 'react';
import {Link}        from 'react-router';

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer-main">
        <div className="container">
          <div className="row">

            <div className="col-md-8">
              <ul className="list-inline">
                <li><Link to="/" >Link 1</Link></li>
                <li><Link to="/" >Link 2</Link></li>
                <li><Link to="/" >Link 3</Link></li>
              </ul>  
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cumque quisquam vero autem, perspiciatis a voluptatibus nostrum consectetur labore eaque commodi quasi recusandae suscipit, enim ut rem? Architecto, optio, adipisci.</p>
            </div>

            <div className="col-md-4">
              <img src="assets/images/Logo.jpg" className="pull-right logo"/>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
