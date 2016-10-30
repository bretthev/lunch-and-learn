import firebase from 'firebase';
import firebaseApp from './authActions'
import { map } from 'lodash';

const proposalsDatabase = firebase.database().ref('proposals');

function sendProposalToStore(proposal) {
  return (dispatch) => {
    dispatch({ type: 'ADD_PROPOSAL', proposal})
    sendProposalToDatabase(proposal)
  }
}

function sendProposalToDatabase(proposalObject) {
    proposalsDatabase.push({
      author: proposalObject.author,
      title: proposalObject.title,
      body: proposalObject.body,
      timestamp: Date.now()
    })
}

function getProposalsFromDatabase() {
  return (dispatch, getState) => {
    let proposals = [];
    proposalsDatabase.limitToLast(5).on('value', (snapshot) => {
      map(snapshot.val(), (proposal) => { proposals.push(proposal)})
    })
    dispatch({
      type: 'GET_PROPOSALS_FROM_DATABASE',
      proposals
    })
  }
}

export { sendProposalToStore, getProposalsFromDatabase }
