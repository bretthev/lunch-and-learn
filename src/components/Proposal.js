import React from 'react';
import ProposalList from './ProposalList';
import { Link } from 'react-router';

const Proposal = (proposal) => {
  return (
    <li onMouseEnter={e => proposal.grabProposal(proposal)}
        onMouseLeave={e => proposal.clearProposal()}>
      <h2>{proposal.title}</h2>
      <h3>{proposal.author}</h3>
      <p>{proposal.body}</p>
      <button
      className="delete-proposal"
      onClick={e => proposal.deleteProposal(proposal.proposalId)}
      >
        Delete
      </button>
      <Link to="/EditProposal">
        <button className="edit-proposal">Edit</button>
      </Link>
    </li>
  )
}

export default Proposal;
