import React, { Component } from 'react';
import { Link } from 'react-router';

const Signin = ({ currentUser, signIn }) => {
  return (
    <section className="signin-screen">
      <h1 className="signin-title">Lunch and Learn</h1>
      <Link to="/Home" className="signin-link">
      <button className="login-button"
              onClick={e => signIn()}>
        Sign In
      </button>
      </Link>
    </section>
  )
}

export default Signin
