import React from 'react';
import ShortDisplayItem from './ShortDisplayItem';
import TargetItem from './TargetItem';
import { map } from 'lodash';

export class ProposalList extends React.Component {

  componentDidMount() {
    this.props.getProposalsFromDatabase();
  };

  render() {
    const displayShortProposals = map(this.props.proposals, (proposal) => {return <ShortDisplayItem key={proposal.key || proposal.timestamp} id={proposal.key} grabTarget={this.props.grabTargetProposal} clearProposal={this.props.clearTargetProposal} {...proposal}/>});
    if (this.props.proposals.length > 0) {
      return (
        <section className="proposal-list">
          <section className="proposal-list-container">
              <ul className="proposal-list-ul">
                {displayShortProposals}
              </ul>
              <TargetItem deleteProposal={this.props.deleteProposal} updateCounter={this.props.updateLikes} clearTarget={this.props.clearTargetProposal} {...this.props.targetProposal}/>
          </section>
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
