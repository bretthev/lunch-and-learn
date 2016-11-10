import React from 'react';
import ShortDisplayItem from './ShortDisplayItem';
import TargetItem from './TargetItem';
import Navigation from '../containers/Navigation';
import { map } from 'lodash';


export class ProposalList extends React.Component {

  componentWillMount() {
    this.props.getProposalsFromDatabase();
    this.props.getPresentationsFromDatabase();
    this.props.getUsersFromDatabase();
  };

  renderTargetItem() {
    return (
      this.props.targetProposal.title === '' ?
      <h2 className="empty-target-message target-item">Click a proposal on the right to see more info.</h2>
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
          {this.renderTargetItem()}
              <ul className="proposal-list-ul">
                {this.displayShortProposals()}
              </ul>
          </section>
          <Navigation />
        </section>
      )
    }
    else {
      return (
        <section className="proposal-list">
          <h3>No proposals.</h3>
          <Navigation />
        </section>
      )
    }
  }
}

export default ProposalList;
