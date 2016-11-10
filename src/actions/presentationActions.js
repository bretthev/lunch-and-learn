import firebase from 'firebase';
import firebaseApp from './userActions';
import { map, extend } from 'lodash';

const presentationsDatabase = firebase.database().ref('presentations');

const addProposalToPresentations = (proposal) => {
  presentationsDatabase.push({
    author: proposal.author,
    title: proposal.title,
    location: proposal.location,
    body: proposal.body,
    isPresentation: true,
    timestamp: proposal.timestamp,
    rsvps: 0,
    rsvpList: ['default']
  })
  return (dispatch) => {
    dispatch({
      type: 'CREATE_PRESENTATION_SUCCESS',
      })
  }
}


const getPresentationsFromDatabase = () => {
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

const grabTargetPresentation = (presentation) => {
  return (dispatch) => {
    dispatch({
      type: 'TARGET_PRESENTATION',
      presentation
    })
  }
}

const clearTargetPresentation = () => {
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_TARGET_PRESENTATION'
    })
  }
}

const updatePresentationInFirebase = (id, newRsvps, newRsvpList) => {
  firebase.database().ref(`presentations/${id}`).update({ rsvps: newRsvps, rsvpList: newRsvpList })
}

const checkIfUserHasRsvpd = (rsvpdArray, number, uid) => {
  const filterForRepeatRsvps = (rsvdList) => rsvdList !== uid
  let filteredRsvpArray = rsvpdArray.filter(filterForRepeatRsvps)
  if (number === 1) { filteredRsvpArray = filteredRsvpArray.concat(uid)}
  return filteredRsvpArray;
}

const updateRsvps = (item, number, uid) => {
  let rsvpdListArray = checkIfUserHasRsvpd(item.rsvpList, number, uid)
  const presentation = Object.assign({}, item, { rsvps: item.rsvps + number, rsvpList: rsvpdListArray})
  updatePresentationInFirebase(item.id, presentation.rsvps, presentation.rsvpList)
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_RSVPS',
      presentation
    })
  }
  getPresentationsFromFirebase()
}

const deletePresentation = (key) => {
  firebase.database().ref(`presentations/${key}`).remove();
  return (dispatch, getState) => {
    dispatch({
      type: 'DELETE_PRESENTATION',
      key
    })
  }
}


export { getPresentationsFromDatabase, addProposalToPresentations, grabTargetPresentation, clearTargetPresentation, updateRsvps, deletePresentation }
