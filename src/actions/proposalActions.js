import firebase from 'firebase';
import firebaseApp from './authActions'
import { map, extend } from 'lodash';

const proposalsDatabase = firebase.database().ref('proposals');

// function sendProposalToStore(proposal) {
//   let proposalObject = {author: proposal.author, title: proposal.title, body: proposal.body, timestamp: Date.now()}
//   return (dispatch) => {
//     dispatch({ type: 'ADD_PROPOSAL', proposalObject})
//     sendProposalToDatabase(proposalObject)
//   }
// }

function sendProposalToDatabase(proposalObject) {
    proposalsDatabase.push({
      author: proposalObject.author,
      title: proposalObject.title,
      body: proposalObject.body,
      timestamp: proposalObject.timestamp
    })
    return (dispatch) => {
      dispatch({ type: 'ADD_PROPOSAL', proposalObject})
    }
}

function getProposalsFromDatabase() {
  return (dispatch, getState) => {
    let proposals;
    proposalsDatabase.on('value', (snapshot) => {
      proposals = snapshot.val();
    })
    let proposalsObject = map(proposals, (value, key) => extend(value, { key }))
    let proposalsWithKeys = []
    map(proposalsObject, (p) => { proposalsWithKeys.push(p)})
    dispatch({
      type: 'GET_PROPOSALS_FROM_DATABASE',
      proposalsWithKeys
    })
  }
}


export { sendProposalToDatabase, getProposalsFromDatabase }
