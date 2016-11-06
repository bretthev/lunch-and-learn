import React from 'react';
import ProposalList from './ProposalList';
import { Link } from 'react-router';

const ShortDisplayItem = (item) => {
  return (
    <li
    className="short-proposal"
    onClick={e => item.grabTarget(item)}>
      <h2 className="short-title">{item.title}</h2>
      {item.location ? <h3 className="short-location">{item.location}</h3>
        :
        <h3 className="short-author">{item.author}</h3>}
    </li>
  )
}

export default ShortDisplayItem;
