import React from 'react';

const AddProposal = ({currentUser, sendProposalToStore}) => {
  let proposalTitle;
  let proposalBody;
  return (
    <section className="add-proposal">
      <h1>Add your proposal</h1>
      <form className="add-proposal-form"
        onSubmit={ (e) => {
          e.preventDefault()
          sendProposalToStore({author: currentUser.username, title: proposalTitle.value, body: proposalBody.value})
          proposalTitle.value='';
          proposalBody.value='';
        }}>
        <input placeholder="Proposal Title" className="title-input" ref={ node => { proposalTitle = node}}/>
        <input placeholder="Proposal Content" className="content-input" ref={ node => { proposalBody = node}}/>
        <button>Submit Proposal</button>
      </form>
    </section>
  )
}

export default AddProposal;
