import React from 'react';
import { map } from 'lodash';
import ShortDisplayItem from './ShortDisplayItem';
import TargetItem from './TargetItem';

export default class PresentationList extends React.Component {

  componentWillMount() {
    this.props.getPresentationsFromDatabase()
  }

  render() {
    const displayShortPresentations = map(this.props.presentations, (presentation) => {
      return <ShortDisplayItem key={presentation.key} id={presentation.key} grabTarget={this.props.grabTargetPresentation}{...presentation} />
    })
    return (
      <section className="proposal-list">
        <section className="proposal-list-container">
          <ul className="proposal-list-ul"> {displayShortPresentations} </ul>
          <TargetItem isPresentation deletePresentation={this.props.deletePresentation} updateCounter={this.props.updateRsvps} {...this.props.targetPresentation} />
        </section>
      </section>
    )
  }
}
