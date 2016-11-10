import React, { Component } from 'react';
import { Link } from 'react-router';
import SignIn from '../containers/SignIn';
import Navigation from '../containers/Navigation';


class App extends Component {

  constructor(props) {
    super(props);
    this.onClickLogout = this.onClickLogout.bind(this);
  }
  renderChildren() {
    return this.props.isUserSignedIn ? this.props.children :
      (<SignIn />);
  }
  onClickLogout() {
    this.props.logoutUser();
  }
  render() {
    return (
      <div className="App">
        <h1 className="header">Lunch and Learn
        </h1>
        <div className="App-Body">
          {this.renderChildren()}
        </div>
      </div>
    );
  }
}

export default App;
