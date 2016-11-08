import firebase from 'firebase';
import firebaseApp from './userActions';
import { map, extend } from 'lodash';

const presentationsDatabase = firebase.database().ref('presentations');

function addProposalToPresentations(proposal) {
  presentationsDatabase.push({
    author: proposal.author,
    title: proposal.title,
    location: proposal.location,
    body: proposal.body,
    timestamp: proposal.timestamp,
    rsvps: 0
  })
  return (dispatch) => {
    dispatch({
      type: 'CREATE_PRESENTATION_SUCCESS',
      })
  }
}


function getPresentationsFromDatabase() {
  return (dispatch, getState) => {
    let presentations;
    presentationsDatabase.on('value', (snapshot) => {
      presentations = snapshot.val();
      let presentationsObject = map(presentations, (value, key) => extend(value, { key } ))
      let presentationsWithKeys = [];
      map(presentationsObject, (p) => { presentationsWithKeys.push(p)})
      dispatch({
        type: 'FETCH_PRESENTATIONS_SUCCESS',
        presentationsWithKeys
      })
    })
  }
}

function grabTargetPresentation(presentation) {
  return (dispatch) => {
    dispatch({
      type: 'TARGET_PRESENTATION',
      presentation
    })
  }
}

function clearTargetPresentation() {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_TARGET_PRESENTATION'
    })
  }
}

function updateRsvps(item, number) {
  let presentation = {author: item.author,
  title: item.title,
  body: item.body,
  timestamp: item.timestamp,
  location: item.location,
  rsvps: item.rsvps + number}
  firebase.database().ref(`presentations/${item.id}`).update({
    rsvps: presentation.rsvps
  })
    return (dispatch) => {
      dispatch({
        type: 'UPDATE_RSVPS',
        presentation
      })
  }
  getPresentationsFromDatabase();
}

export { getPresentationsFromDatabase, addProposalToPresentations, grabTargetPresentation, clearTargetPresentation, updateRsvps }
