import React from 'react';
import ProposalList from './ProposalList';
import { Link } from 'react-router';

const TargetProposal = (proposal) => {
  return (
    <article className="target-proposal">
      <h2 className="target-title">{proposal.title}</h2>
      <h3 className="target-author">{proposal.author}</h3>
      <p className="target-body">{proposal.body}</p>
        {proposal.title !== '' ?
          <div className="target-button-container">
                <Link to="/EditProposal">
                  <button className="edit-proposal-button">
                    Edit
                  </button>
                </Link>
                <button
                className="delete-proposal-button"
                onClick={e => {proposal.deleteProposal(proposal.id)
                  proposal.clearTarget()}}
                  >
                  Delete
                  </button>
                <Link to="/FinalizePresentation">
                  <button>Finalize</button>
                </Link>
            </div>
          : <h2 className="empty-target-message">Click a proposal on the left to see more info.</h2>}
    </article>
  )
}

export default TargetProposal;
