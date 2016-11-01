import React, { Component } from 'react';
import { Link } from 'react-router';

const Signin = ({ currentUser, signIn }) => {
  return (
    <section className="signin-screen">
      <h1>Lunch and Learn</h1>
      <Link to="/Home">
      <button className="login-button"
              onClick={e => signIn()}>
        Sign In
      </button>
      </Link>
    </section>
  )
}

export default Signin
