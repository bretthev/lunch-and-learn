import firebase from 'firebase';
import firebaseApp from './authActions';
import { map, extend } from 'lodash';

const presentationsDatabase = firebase.database().ref('presentations');

function addProposalToPresentations(proposal) {
  presentationsDatabase.push({
    author: proposal.author,
    title: proposal.title,
    location: proposal.location,
    body: proposal.body,
    timestamp: proposal.timestamp
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

export { getPresentationsFromDatabase, addProposalToPresentations }
