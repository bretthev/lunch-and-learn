import React from 'react';

const Counter = (item) => {
  const hasLiked = item.isPresentation ? false : item.likedBy.includes(item.uid);
  let counterChange = hasLiked ? -1 : 1
  let buttonText;
  if (item.isPresentation) {
   buttonText = hasLiked ? "Cancel RSVP" : "RSVP";
    } else {
       buttonText = hasLiked ? "Unlike" : "Like";
  }
  const buttonElement = <button onClick={e => {item.updateCounter(item, counterChange, item.uid)}}>{buttonText}</button>


  return (
    item.isPresentation ?
      <section className="counter-container">
        <h4>RSVPs: {item.rsvps}</h4>
        {buttonElement}
      </section>
      :
      <section className="counter-container">
        <h4>Likes: {item.likes}</h4>
        {buttonElement}
      </section>
  )
}

export default Counter;
