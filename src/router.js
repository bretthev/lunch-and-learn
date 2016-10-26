import React from 'react';
import { IndexRoute, Router, Route  } from 'react-router';
import App from './components/App';
import Homepage from './components/Homepage';
import SignIn from './containers/SignIn'


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      <Route path="/SignIn" component={SignIn} />
    </Route>
  </Router>
);

export default Routes;
