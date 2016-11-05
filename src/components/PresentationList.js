import React from 'react';
import { map } from 'lodash';

export class PresentationList extends React.Component {

  render() {
    const displayPresentations = map(this.props.presentations, (presentation) => {
      return <li key={presentation.key}>{presentation.title} {presentation.location}</li>
    })
    return (
      <section classname="presentation-list">
        <ul>
          {displayPresentations}
        </ul>
      </section>
    )
  }
}
