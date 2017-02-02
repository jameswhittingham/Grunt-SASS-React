'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import APIUtils         from '../utils/APIUtils';

const propTypes = {
  currentUser: React.PropTypes.object
};

class HomePage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {items: [], text: ''};
  }

  componentDidMount() {
    this.getData()    
  }

  getData() { 
    var t = this;

    APIUtils.get('../scripts/data/data.js').then(function(data){
      t.setState((prevState) => ({
        items: JSON.parse(data.text)['panels'],
        text: ''
      }));
    })
  }

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="home-page">

          <main className="container">
            
            <div className="jumbotron">
              <h1>Gulp SASS React Boilerplate</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vero eveniet, illo soluta, deserunt maiores ipsum. Quae nisi neque temporibus beatae nesciunt mollitia expedita assumenda. Nobis vitae rem, excepturi explicabo.</p>
            </div>

            <div className="row">
              
              <PanelList items={this.state.items} />

            </div>
          </main>

        </section>
      </DocumentTitle>
    );
  }
}

class PanelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedPanel: 0};
    this.selectPanel = this.selectPanel.bind(this);    
  }

  selectPanel(id) {
    this.setState(prevState => ({
      selectedPanel: id
    }));
  }

  render() {
    return (
      <ul>
        {this.props.items.map(item => (

          <div key={item.id} onClick={() => this.selectPanel(item.id)} data-sid={this.state.selectedPanel} data-id={item.id} className={this.state.selectedPanel == item.id ? "col-md-4 selected" : "col-md-4 not-selected"}>
            <div className="panel panel-default">
              <div className="panel-heading" dangerouslySetInnerHTML={{__html: item.title}}></div>
              <div className="panel-body"  dangerouslySetInnerHTML={{__html: item.body}}></div>
            </div>
          </div>

        ))}
      </ul>
    );
  }
}

HomePage.propTypes = propTypes;

export default HomePage;
