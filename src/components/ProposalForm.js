import React from 'react';
import ProposalList from '../containers/ProposalList'
import Navigation from '../containers/Navigation';
// import { Link } from 'react-router';

const ProposalForm = ({currentUser, submitProposal, targetProposal, buttonText}) => {
  let proposalTitle;
  let proposalBody;
  if (buttonText === 'Add proposal.') { targetProposal.title='', targetProposal.body='' }
  return (
    <section className="add-proposal">
      <h1 className="form-title">Add your proposal</h1>
      <form className="add-proposal-form"
        onSubmit={ (e) => {
          e.preventDefault()
          submitProposal({author: currentUser.username, title: proposalTitle.value, body: proposalBody.value, timestamp: Date.now(), id: targetProposal.id,  })
          proposalTitle.value='';
          proposalBody.value='';
        }}>
        <input placeholder="Proposal Title" className="title-input" defaultValue={targetProposal.title} ref={ node => { proposalTitle = node}}/>
        <textarea placeholder="Proposal Content" className="body-input" defaultValue={targetProposal.body} ref={ node => { proposalBody = node}}/>
        <button className="submit-proposal-button">
          {buttonText}
        </button>
      </form>
      <Navigation/>
    </section>
  )
}

export default ProposalForm;
