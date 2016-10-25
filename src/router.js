import React from 'react';
import { IndexRoute, Router, Route  } from 'react-router';
import App from './components/App';
import Homepage from './components/Homepage';
import TestRouter from './containers/TestContainer';


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      <Route path="/Testing" component={TestRouter} />
    </Route>
  </Router>
);

export default Routes;
