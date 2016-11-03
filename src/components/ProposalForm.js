import React from 'react';
import ProposalList from '../containers/ProposalList'
import { Link } from 'react-router';

const ProposalForm = ({currentUser, submitProposal, targetProposal}) => {
  let proposalTitle;
  let proposalBody;
  return (
    <section className="add-proposal">
      <h1>Add your proposal</h1>
      <form className="add-proposal-form"
        onSubmit={ (e) => {
          e.preventDefault()
          submitProposal({author: currentUser.username, title: proposalTitle.value, body: proposalBody.value, timestamp: Date.now(), id: targetProposal.proposalId })
          proposalTitle.value='';
          proposalBody.value='';
        }}>
        <input placeholder="Proposal Title" className="title-input" defaultValue={targetProposal.title} ref={ node => { proposalTitle = node}}/>
        <input placeholder="Proposal Content" className="content-input" defaultValue={targetProposal.body} ref={ node => { proposalBody = node}}/>
        <button>
        <Link to="/Home">
        Submit Proposal
        </Link>
        </button>
      </form>
    </section>
  )
}

export default ProposalForm;
