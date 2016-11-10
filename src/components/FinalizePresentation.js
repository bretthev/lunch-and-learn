import React from 'react';
import { Link } from 'react-router';
import Navigation from '../containers/Navigation';

const FinalizePresentation = ({ currentUser, addProposalToPresentations, targetProposal }) => {
  let presentationLocation;
  let isDisabled = true;

  return (
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
        }}>
          <input placeholder="Add a location" className="location-input" ref={node => { presentationLocation = node }}/>
          <button className="finalize-button" disabled={isDisabled}>
            Finalize presentation
          </button>
        </form>
    </section>
    <Navigation className="finalize-navigation"/>
    </section>
  )
}


export default FinalizePresentation;
