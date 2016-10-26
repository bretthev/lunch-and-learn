import React, { Component } from 'react';

const Header = ({ authState, listenToAuth, signIn }) => {
  return (
    <section id="signin-screen">
      <button id="login-button" onClick={e => signIn ()}>Sign In </button>
    </section>
  )
}

export default Header
