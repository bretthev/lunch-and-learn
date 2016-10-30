import React from 'react';
import Proposal from './Proposal';
import { map } from 'lodash';

const ProposalList = (proposals) => {
  const displayProposals = map(proposals.proposals, (proposal) => {return <Proposal {...proposal}/>});
  return (
    <section className="proposal-list">
    <h1>Proposals</h1>
      <ul className="proposal-list-ul">
        {displayProposals}
      </ul>
    </section>
  )
}

export default ProposalList;
