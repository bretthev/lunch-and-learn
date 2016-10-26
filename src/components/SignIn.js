import React, { Component } from 'react';
import { Link } from 'react-router';

const Signin = ({ currentUser, listenToAuth, signIn }) => {
  return (
    <section id="signin-screen">
      <Link to="/Home"><button id="login-button" onClick={e => signIn ()}>Sign In </button></Link>
    </section>
  )
}

export default Signin
