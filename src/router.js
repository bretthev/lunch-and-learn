import React from 'react';
import { IndexRoute, Router, Route  } from 'react-router';
import App from './components/App';
import Homepage from './containers/Homepage';
import SignIn from './containers/SignIn';
import AddProposal from './containers/AddProposal';
import EditProposal from './containers/EditProposal';
import FinalizePresentation from './containers/FinalizePresentation';
import PresentationList from './containers/PresentationList';


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      <Route path="/Home" component={Homepage} />
      <Route path="/AddProposal" component={AddProposal} />
      <Route path="/EditProposal" component={EditProposal} />
      <Route path="/FinalizePresentation" component={FinalizePresentation} />
      <Route path="/Presentations" component={PresentationList} />
    </Route>
  </Router>
);

export default Routes;
