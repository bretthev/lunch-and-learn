import React from 'react';
import Proposal from './Proposal';
import { map } from 'lodash';

export class ProposalList extends React.Component {

  componentWillMount() {
    this.props.getProposalsFromDatabase();
  };

  render() {
    const displayProposals = map(this.props.proposals, (proposal) => {return <Proposal key={proposal.key || proposal.timestamp} deleteProposal={this.props.deleteProposal} proposalId={proposal.key} grabProposal={this.props.grabTargetProposal} clearProposal={this.props.clearTargetProposal} {...proposal}/>});
    if (this.props.proposals.length > 0) {
      return (
        <section className="proposal-list">
        <h1>Proposals</h1>
          <ul className="proposal-list-ul">
            {displayProposals}
          </ul>
        </section>
      )
    }
    else {
      return (
        <h3>No proposals.</h3>
      )
    }
  }
}

export default ProposalList;
