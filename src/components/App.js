import React, { Component } from 'react';
import { Link } from 'react-router';
import SignIn from '../containers/SignIn';

const NavigationLink = (props) =>(
  <Link
    to={props.to}
    activeClassName="current-link"
    className="nav-link"
  >
    {props.children}
  </Link>);

class App extends Component {

  constructor(props) {
    super(props);
    this.onClickLogout = this.onClickLogout.bind(this);
  }
  renderChildren() {
    return this.props.isUserSignedIn ? this.props.children :
      (<SignIn />);
  }
  renderUsername() {
    return this.props.isUserSignedIn ? this.props.currentUser.username : 'Logged Out';
  }
  onClickLogout() {
    this.props.logoutUser();
  }
  render() {
    return (
      <div className="App">
        <div className="Navigation">
          <NavigationLink to="/Home">Home</NavigationLink>
          <NavigationLink to="/Presentations">Presentations</NavigationLink>
          <NavigationLink to="/AddProposal">Create a Proposal</NavigationLink>
          <span className="username">
            {this.renderUsername()}
            <button className="logout-btn" onClick={this.onClickLogout}>( Logout )</button>
          </span>
        </div>
        <div className="App-Body">
          {this.renderChildren()}
        </div>
      </div>
    );
  }
}

export default App;
