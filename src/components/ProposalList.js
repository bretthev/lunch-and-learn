import React from 'react';
import Proposal from './Proposal';
import { map } from 'lodash';

export class ProposalList extends React.Component {

  componentWillMount() {
    this.props.getProposalsFromDatabase();
  }
  
  render() {
    const displayProposals = map(this.props.proposals, (p) => {return <Proposal key={p.key} {...p} deleteProposal={this.props.deleteProposal(p.key)}/>});
    return (
      <section className="proposal-list">
      { this.props.proposals.length > 0 ? <h1>Proposals</h1>  : ``}
        <ul className="proposal-list-ul">
          {displayProposals}
        </ul>
      </section>
    )
  }
}

export default ProposalList;
