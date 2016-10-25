import React, { Component } from 'react';
import TestRouter from './TestRouter';
import { Link } from 'react-router';

class Homepage extends Component {
  render() {
    return (
      <section className="homepage">
        <h2>Testing Homepage</h2>
        <Link to="/Testing" className="test-link">Testing Router</Link>
      </section>
    );
  }
}

export default Homepage;
