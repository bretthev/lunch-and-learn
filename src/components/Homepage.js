import React, { Component } from 'react';
import { Link } from 'react-router';

const Homepage = ({ currentUser }) => {
  return (
    <section className="homepage">
      <h1>
      {currentUser.username ? `Hello ${currentUser.username}!` : `Loading your profile...`}
      </h1>
      <Link to="/AddProposal">
        <button>Add new proposal</button>
      </Link>
    </section>
  )
}

export default Homepage;
