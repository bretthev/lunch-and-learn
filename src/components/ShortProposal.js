import React from 'react';
import ProposalList from './ProposalList';
import { Link } from 'react-router';

const ShortProposal = (proposal) => {
  return (
    <li
    className="short-proposal"
    onClick={e => proposal.grabProposal(proposal)}>
      <h2 className="short-title">{proposal.title}</h2>
      <h3 className="short-author">{proposal.author}</h3>
    </li>
  )
}

export default ShortProposal;
