import React from 'react';
import ProposalList from './ProposalList';

const Proposal = (proposal) => {
  console.log(proposal.proposalId)
  return (
    <li>
      <h2>{proposal.title}</h2>
      <h3>{proposal.author}</h3>
      <p>{proposal.body}</p>
      <button
      className="delete-proposal"
      onClick={e => proposal.deleteProposal(proposal.proposalId)}
      >
        Delete
      </button>
      <button className="edit-proposal">Edit</button>
    </li>
  )
}

export default Proposal;
