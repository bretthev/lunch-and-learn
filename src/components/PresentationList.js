import React from 'react';
import { map } from 'lodash';
import ShortDisplayItem from './ShortDisplayItem';
import TargetItem from './TargetItem';

export default class PresentationList extends React.Component {

  componentWillMount() {
    this.props.getPresentationsFromDatabase()
  }

  render() {
    const displayPresentations = map(this.props.presentations, (presentation) => {
      return <ShortDisplayItem key={presentation.key} grabTarget={this.props.grabTargetPresentation}{...presentation} />
    })
    return (
      <section className="proposal-list">
        <section className="proposal-list-container">
          <ul className="proposal-list-ul"> {displayPresentations} </ul>
          <TargetItem deletePresentation={this.props.deletePresentation} {...this.props.targetPresentation} />
        </section>
      </section>
    )
  }
}
