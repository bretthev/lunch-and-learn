import React from 'react';
import ProposalList from '../containers/ProposalList';
import { Link } from 'react-router';

const Homepage = ({ currentUser, clearTargetProposal }) => {
  return (
    <section className="homepage">
      <h1 className="homepage-title">
      {currentUser.username ? `Hello ${currentUser.username}!` : `Loading your profile...`}
      </h1>
      <ProposalList />
      <section className="dashboard">
        <Link to="/AddProposal"
            className="dashboard-link">
          <button>
            New proposal
          </button>
        </Link>
        <Link to="/Presentations"
          className="dashboard-link">
          <button>Presentations</button>
        </Link>
      </section>
    </section>
  )
}

export default Homepage;
