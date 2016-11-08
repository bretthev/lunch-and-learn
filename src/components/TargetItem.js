import React from 'react';
import ProposalList from './ProposalList';
import { Link } from 'react-router';

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

      { item.likes >= 0 && item.title !== '' ?
        <section className="counter-container">
          <h4>Likes: {item.likes}</h4>
          <button onClick={e => {item.updateCounter(item, counterObject.counterChange, item.uid)}}>{counterObject.buttonText}</button>
        </section>
        : ''
      }

      { item.rsvps >= 0 && item.title !== '' ?
        <section className="counter-container">
          <h4>RSVPs: {item.rsvps}</h4>
          <button onClick={e => {item.updateCounter(item, 1)}}>RSVP</button>
        </section>
        : ''
      }

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
          {finalizeButton}
            </div>
          : <h2 className="empty-target-message">Click an item on the left to see more info.</h2>}

    </article>
  )
}

export default TargetItem;
