import React from 'react';
import ProposalList from './ProposalList';

const Proposal = (proposal) => {
  return (
    <li>
      <h2>{proposal.title}</h2>
      <h3>{proposal.author}</h3>
      <p>{proposal.body}</p>
    </li>
  )
}

export default Proposal;
