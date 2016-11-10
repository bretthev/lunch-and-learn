import React from 'react';

const Counter = (item) => {
  const hasLiked = item.isPresentation ? false : item.likedBy.includes(item.uid);
  const hasRsvpd = item.isPresentation ? item.rsvpList.includes(item.uid) : false;
  let counterChange;
  if (item.isPresentation) {
    counterChange = hasRsvpd ? -1 : 1;
  } else {
    counterChange = hasLiked ? -1 : 1;
  }

  let buttonText;
  if (item.isPresentation) {
    buttonText = hasRsvpd ? "Cancel" : "RSVP";
    } else {
       buttonText = hasLiked ? "Unlike" : "Like";
  }

  const buttonElement = <button className="counter-button" onClick={e => {item.updateCounter(item, counterChange, item.uid)}}>{buttonText}</button>


  return (
    item.isPresentation ?
      <section className="counter-container">
      {buttonElement}
        <h4 className="counter-text">{item.rsvps}</h4>
      </section>
      :
      <section className="counter-container">
      {buttonElement}
        <h4 className="counter-text">{item.likes}</h4>
      </section>
  )
}

export default Counter;
