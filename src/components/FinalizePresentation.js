import React, { Component} from 'react';
import { Link } from 'react-router';
import Navigation from '../containers/Navigation';


export default class FinalizePresentation extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisabled: true
    }
  }

  updateIsDisabled(locationInput) {
    if (locationInput !== '') { this.setState({ isDisabled: false })}
    else { this.setState({ isDisabled: true })}
  }

render() {
  let presentationLocation;
  const { isDisabled } = this.state;
  const { currentUser, addProposalToPresentations, targetProposal } = this.props;

  return(
    <section className="finalize-presentation-container">
      <section className="finalize-presentation">
        <h1 className="form-title">Finalize this proposal?</h1>
        <h2 className="finalize-title">Title: {targetProposal.title}</h2>
        <h3 className="finalize-author">With: {targetProposal.author}</h3>
        <p className="finalize-body">{targetProposal.body}</p>
        <form className="finalize-presentation-form"
        onSubmit={ (e) => {
          e.preventDefault()
          addProposalToPresentations({author: targetProposal.author, title: targetProposal.title, body: targetProposal.body, timestamp: Date.now(), location: presentationLocation.value})
          presentationLocation.value=''
        }}>
          <input placeholder="Add a location" className="location-input" ref={node => { presentationLocation = node }} onChange={e => this.updateIsDisabled(presentationLocation.value)}/>
          <button className="finalize-button" disabled ={isDisabled} >
            Finalize presentation
          </button>
        </form>
    </section>
    <Navigation className="finalize-navigation"/>
    </section>
    )
  }
}
