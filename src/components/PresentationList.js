import React from 'react';
import { map } from 'lodash';
import ShortDisplayItem from './ShortDisplayItem'

export default class PresentationList extends React.Component {

  componentWillMount() {
    this.props.getPresentationsFromDatabase()
  }

  render() {
    const displayPresentations = map(this.props.presentations, (presentation) => {
      return <ShortDisplayItem key={presentation.key} {...presentation} />
    })
    return (
      <section className="presentation-list">
        <h1>Presentations</h1>
        <ul> {displayPresentations} </ul>
      </section>
    )
  }
}
