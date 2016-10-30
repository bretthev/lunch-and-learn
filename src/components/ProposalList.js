import React from 'react';
import Proposal from './Proposal';
import { map } from 'lodash';

export class ProposalList extends React.Component {

  componentWillMount() {
    this.props.getProposalsFromDatabase()
  };

  render() {
    console.log(this.props.proposals)
    const displayProposals = map(this.props.proposals, (proposal) => {return <Proposal {...proposal}/>});
    return (
      <section className="proposal-list">
      <h1>Proposals</h1>
        <ul className="proposal-list-ul">
          {displayProposals}
        </ul>
      </section>
    )
  }
}

export default ProposalList;
