import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from '../containers/SignIn';

export class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}
