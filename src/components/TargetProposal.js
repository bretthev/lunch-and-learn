import React from 'react';
import ProposalList from './ProposalList';
import { Link } from 'react-router';

const TargetProposal = (proposal) => {
  return (
    <article className="target-proposal">
      <h2>{proposal.title}</h2>
      <h3>{proposal.author}</h3>
      <p>{proposal.body}</p>
      <Link to="/Home">
        <button
        className="delete-proposal"
        onClick={e => proposal.deleteProposal(proposal.id)}
        >
          Delete
        </button>
      </Link>
      <Link to="/EditProposal">
        <button className="edit-proposal">Edit</button>
      </Link>
    </article>
  )
}

export default TargetProposal;
