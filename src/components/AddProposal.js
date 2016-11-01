import React from 'react';
import ProposalList from '../containers/ProposalList'
import { Link } from 'react-router';

const AddProposal = ({currentUser, sendProposalToDatabase}) => {
  let proposalTitle;
  let proposalBody;
  return (
    <section className="add-proposal">
      <h1>Add your proposal</h1>
      <form className="add-proposal-form"
        onSubmit={ (e) => {
          e.preventDefault()
          sendProposalToDatabase({author: currentUser.username, title: proposalTitle.value, body: proposalBody.value, timestamp: Date.now()})
          proposalTitle.value='';
          proposalBody.value='';
        }}>
        <input placeholder="Proposal Title" className="title-input" ref={ node => { proposalTitle = node}}/>
        <input placeholder="Proposal Content" className="content-input" ref={ node => { proposalBody = node}}/>
        <button>Submit Proposal</button>
      </form>
      <Link to ="/Home">
        <button>Home</button>
      </Link>
    </section>
  )
}

export default AddProposal;
