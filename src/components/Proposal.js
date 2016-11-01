import React from 'react';
import ProposalList from './ProposalList';

const Proposal = (proposal, deleteProposal) => {
  return (
    <li>
      <h2>{proposal.title}</h2>
      <h3>{proposal.author}</h3>
      <p>{proposal.body}</p>
      <button className="edit-proposal-button">Edit</button>
      <button
      className="delete-proposal-button"
      onClick={(e) => deleteProposal(e)}>Delete</button>
    </li>
  )
}

export default Proposal;
