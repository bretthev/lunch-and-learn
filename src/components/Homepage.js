import React, { Component } from 'react';

const Homepage = ({ currentUser }) => {
  return (
    <section id="homepage">
      <h1>
      {currentUser.username ? `Hello ${currentUser.username}!` : `Loading your profile...`}
      </h1>
    </section>
  )
}

export default Homepage;
