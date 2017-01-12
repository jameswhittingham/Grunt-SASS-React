'use strict';

import React from 'react';

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
                <li><a href="">Link 1</a></li>
                <li><a href="">Link 2</a></li>
                <li><a href="">Link 3</a></li>
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
