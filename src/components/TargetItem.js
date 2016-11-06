import React from 'react';
import ProposalList from './ProposalList';
import { Link } from 'react-router';

const TargetItem = (item) => {
  console.log(item.likes)
  return (
    <article className="target-item">
      <h2 className="target-title">{item.title}</h2>
      {item.location ? <h3 className="target-location">{item.location}</h3> : ''}
      <h3 className="target-author">{item.author}</h3>
      <p className="target-body">{item.body}</p>
      { item.likes >= 0 ?
        <div>
          <h4>Likes: {item.likes}</h4>
          <button onClick={e => {item.addToCount(item)}}>Like</button>
        </div>
        : '' }
        {item.title !== '' ?
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
                <Link to="/FinalizePresentation">
                  <button>Finalize</button>
                </Link>
            </div>
          : <h2 className="empty-target-message">Click an item on the left to see more info.</h2>}
    </article>
  )
}

export default TargetItem;
