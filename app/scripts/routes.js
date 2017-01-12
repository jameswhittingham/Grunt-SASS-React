'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App                         from './App';
import HomePage                    from './pages/HomePage';
import SearchPage                  from './pages/SearchPage';
import StyleGuide                  from './pages/StyleGuide';
import NotFoundPage                from './pages/NotFoundPage';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={HomePage} />

      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/style-guide" component={StyleGuide} />

      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
);
