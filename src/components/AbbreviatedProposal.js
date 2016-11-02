import React from 'react';
import ProposalList from './ProposalList';
import { Link } from 'react-router';

const AbbreviatedProposal = (proposal) => {
  return (
    <li onClick={e => proposal.grabProposal(proposal)}>
      <h2>{proposal.title}</h2>
      <h3>{proposal.author}</h3>
    </li>
  )
}

export default AbbreviatedProposal;
