import React from 'react';
import { Link } from 'react-router';

const FinalizePresentation = ({ currentUser, addProposalToPresentations, targetProposal }) => {
  let presentationLocation;
  return (
    <section className="finalize-presentation">
      <h1>Finalize this proposal?</h1>
      <h2>{targetProposal.title}</h2>
      <h3>{targetProposal.author}</h3>
      <p>{targetProposal.body}</p>
      <form className="finalize-presentation-form"
        onSubmit={ (e) => {
          e.preventDefault()
          addProposalToPresentations({author: targetProposal.author, title: targetProposal.title, body: targetProposal.body, timestamp: Date.now(), location: presentationLocation.value})
        }}>
        <input placeholder="Add a location" className="location-input" ref={node => { presentationLocation = node }}/>
          <button>Finalize presentation</button>
          </form>
          <Link to="/Presentations">
            <button>See presentations</button>
          </Link>
    </section>
  )
}


export default FinalizePresentation;
