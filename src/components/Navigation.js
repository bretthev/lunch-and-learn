import React from 'react';
import { Link } from 'react-router';


const NavigationLink = (props) => (
  <Link
  to={props.to}
  activeClassName="current-link"
  className="nav-link"
  >
  {props.children}
  </Link>
)

const Navigation = (currentUser, logoutUser) => {
  
  return (

    <div className="Navigation">
      <NavigationLink to="/Home">Home</NavigationLink>
      <NavigationLink to="/Presentations">Presentations</NavigationLink>
      <NavigationLink to="/AddProposal">Create a Proposal</NavigationLink>
      <span className="username">
        Hello {currentUser.currentUser.username}!
        <button className="logout-btn">( Logout )</button>
      </span>
    </div>
  )
}

export default Navigation;
