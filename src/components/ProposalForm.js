import React, { Component } from 'react';
import ProposalList from '../containers/ProposalList'
import Navigation from '../containers/Navigation';
// import { Link } from 'react-router';


export default class ProposalForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisabled: true
    }
  }

  updateIsDisabled(proposalTitleInput, proposalBodyInput) {
    if (proposalTitleInput !== '' && proposalBodyInput !== '') { this.setState({ isDisabled: false }) }
    else { this.setState({ isDisabled: true }) }
  }

  render() {
    let proposalTitle, proposalBody;

    const { isDisabled } = this.state;
    const { currentUser, submitProposal, targetProposal, buttonText } = this.props;

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
          <input placeholder="Proposal Title" className="title-input" defaultValue={targetProposal.title} ref={ node => { proposalTitle = node}} onChange={e => this.updateIsDisabled(proposalTitle.value, proposalBody.value)}/>
          <textarea placeholder="Proposal Content" className="body-input" defaultValue={targetProposal.body} ref={ node => { proposalBody = node}} onChange={e => this.updateIsDisabled(proposalTitle.value, proposalBody.value)}/>
          <button className="submit-proposal-button" disabled={isDisabled}>
            {buttonText}
          </button>
        </form>
        <Navigation/>
      </section>
    )
  }
}
// const ProposalForm = ({currentUser, submitProposal, targetProposal, buttonText}) => {
//   let proposalTitle;
//   let proposalBody;
//   let isDisabled = true;
//
//   const updateIsDisabled = () => {
//     if (proposalTitle.value !== '' && proposalBody.value !== '') { isDisabled = false; }
//     else { isDisabled = true }
//   }
//
  // return (
  //   <section className="add-proposal">
  //     <h1 className="form-title">Add your proposal</h1>
  //     <form className="add-proposal-form"
  //       onSubmit={ (e) => {
  //         e.preventDefault()
  //         submitProposal({author: currentUser.username, title: proposalTitle.value, body: proposalBody.value, timestamp: Date.now(), id: targetProposal.id,  })
  //         proposalTitle.value='';
  //         proposalBody.value='';
  //       }}>
  //       <input placeholder="Proposal Title" className="title-input" defaultValue={targetProposal.title} ref={ node => { proposalTitle = node}} onChange={e => updateIsDisabled()}/>
  //       <textarea placeholder="Proposal Content" className="body-input" defaultValue={targetProposal.body} ref={ node => { proposalBody = node}} onChange={e => updateIsDisabled()}/>
  //       <button className="submit-proposal-button" disabled={isDisabled}>
  //         {buttonText}
  //       </button>
  //     </form>
  //     <Navigation/>
  //   </section>
//   )
// }
//
// export default ProposalForm;
