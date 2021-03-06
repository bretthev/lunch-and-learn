import React from 'react';
import { map } from 'lodash';
import ShortDisplayItem from './ShortDisplayItem';
import TargetItem from './TargetItem';
import Navigation from '../containers/Navigation';

export default class PresentationList extends React.Component {

  componentWillMount() {
    this.props.getPresentationsFromDatabase()
  }

  renderTargetItem() {
    return (
      this.props.targetPresentation.title === '' ?
      <h2 className="empty-target-message target-item">Click a presentation on the right to see more info.</h2>
      :
      <TargetItem deleteProposal={this.props.deletePresentation} updateCounter={this.props.updateRsvps} clearTarget={this.props.clearTargetPresentation} uid={this.props.currentUser.uid} {...this.props.targetPresentation}/>    )
  }

  render() {

    const displayShortPresentations = map(this.props.presentations, (presentation) => {
      return <ShortDisplayItem key={presentation.key} id={presentation.key} grabTarget={this.props.grabTargetPresentation}{...presentation} />
    })

    return (
      <section className="proposal-list">
        <section className="proposal-list-container">
          {this.renderTargetItem()}
          <ul className="proposal-list-ul"> {displayShortPresentations} </ul>
        </section>
        <Navigation />
      </section>
    )
  }
}
