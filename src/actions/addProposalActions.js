import firebase from 'firebase';
import firebaseApp from './authActions'
import { map } from 'lodash';

const proposalsDatabase = firebase.database().ref('proposals');

function sendProposalToStore(proposalForm) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_PROPOSAL',
      author: proposalForm.author,
      title: proposalForm.title,
      body: proposalForm.body,
      key: Date.now()
    })
    sendProposalToDatabase(proposalForm)
  }
}

function sendProposalToDatabase(proposalObject) {
    proposalsDatabase.push({
      author: proposalObject.author,
      title: proposalObject.title,
      body: proposalObject.body
    })
}

function getProposalsFromDatabase() {
  return (dispatch) => {
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
