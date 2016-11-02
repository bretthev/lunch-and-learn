import React from 'react';
import { IndexRoute, Router, Route  } from 'react-router';
import App from './components/App';
import Homepage from './containers/Homepage';
import SignIn from './containers/SignIn';
import AddProposal from './containers/AddProposal';
import EditProposal from './containers/EditProposal';


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={SignIn} />
      <Route path="/Home" component={Homepage} />
      <Route path="/AddProposal" component={AddProposal} />
      <Route path="/EditProposal" component={EditProposal} />
    </Route>
  </Router>
);

export default Routes;
