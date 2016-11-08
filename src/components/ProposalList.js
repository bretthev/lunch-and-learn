import React from 'react';
import ShortDisplayItem from './ShortDisplayItem';
import TargetItem from './TargetItem';
import { map } from 'lodash';

export class ProposalList extends React.Component {

  componentWillMount() {
    this.props.getProposalsFromDatabase();
  };

  renderTargetItem() {
    return (
      this.props.targetProposal.title === '' ?
      <h2 className="empty-target-message target-item">Click an item to the left to see more info.</h2>
      :
      <TargetItem deleteProposal={this.props.deleteProposal} updateCounter={this.props.updateLikes} clearTarget={this.props.clearTargetProposal} uid={this.props.currentUser.uid} {...this.props.targetProposal}/>
    )
  }

  displayShortProposals() {
    return (
      map(this.props.proposals, (proposal) => {return <ShortDisplayItem key={proposal.key || proposal.timestamp} id={proposal.key} grabTarget={this.props.grabTargetProposal} clearProposal={this.props.clearTargetProposal} {...proposal}/>})
    )
  }

  render() {
    if (this.props.proposals.length > 0) {
      return (
        <section className="proposal-list">
          <section className="proposal-list-container">
              <ul className="proposal-list-ul">
                {this.displayShortProposals()}
              </ul>
          {this.renderTargetItem()}
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
