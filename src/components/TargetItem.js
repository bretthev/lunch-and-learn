import React from 'react';
import ProposalList from './ProposalList';
import { Link } from 'react-router';
import Counter from './Counter';

const TargetItem = (item) => {
  let counterObject = { counterChange: 1, buttonText: 'Like' };
  if (item.likedBy && item.likedBy.includes(item.uid)) { counterObject = { counterChange: -1, buttonText: 'Unlike'}}
  const finalizeButton = !item.isPresentation ? (
    <Link to="/FinalizePresentation">
      <button>Finalize</button>
    </Link>) : null;
  return (
    <article className="target-item">
      <h2 className="target-title">{item.title}</h2>
      {item.location ? <h3 className="target-location">{item.location}</h3> : ''}
      <h3 className="target-author">{item.author}</h3>
      <p className="target-body">{item.body}</p>

      <Counter {...item} />

        <div className="target-button-container">
          <Link to="/EditProposal">
            <button className="edit-item-button">
              Edit
            </button>
          </Link>
          <button
            className="delete-item-button"
            onClick={e => {item.deleteProposal(item.id)
            item.clearTarget()}}
          >
            Delete
          </button>
          {finalizeButton}
            </div>

    </article>
  )
}

export default TargetItem;
