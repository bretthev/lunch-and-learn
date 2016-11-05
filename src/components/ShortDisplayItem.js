import React from 'react';
import ProposalList from './ProposalList';
import { Link } from 'react-router';

const ShortDisplayItem = (item) => {
  return (
    <li
    className="short-proposal"
    onClick={e => item.grabProposal(item)}>
      <h2 className="short-title">{item.title}</h2>
      <h3 className="short-author">{item.author}</h3>
    </li>
  )
}

export default ShortDisplayItem;
