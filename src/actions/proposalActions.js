import firebase from 'firebase';
import firebaseApp from './userActions'
import { map, extend } from 'lodash';

const proposalsDatabase = firebase.database().ref('proposals');

function sendProposalToDatabase(proposalObject) {
    proposalsDatabase.push({
      author: proposalObject.author,
      title: proposalObject.title,
      body: proposalObject.body,
      timestamp: proposalObject.timestamp,
      likes: 0
    })
    return (dispatch) => {
      dispatch({
        type: 'ADD_PROPOSAL',
        proposalObject
      })
    }
}

function getProposalsFromDatabase() {
  return (dispatch, getState) => {
    let proposals;
    proposalsDatabase.on('value', (snapshot) => {
      proposals = snapshot.val();
      let proposalsObject = map(proposals, (value, key) => extend(value, { key }))
      let proposalsWithKeys = []
      map(proposalsObject, (p) => { proposalsWithKeys.push(p)})
      dispatch({
        type: 'GET_PROPOSALS_FROM_DATABASE',
        proposalsWithKeys
      })
    })
  }
}

function deleteProposal(key) {
  firebase.database().ref(`proposals/${key}`).remove();
  return (dispatch, getState) => {
    dispatch({
      type: 'DELETE_PROPOSAL',
      key
    })
  }
}

function editProposal(proposal) {
  firebase.database().ref(`proposals/${proposal.id}`).set({
    author: proposal.author,
    title: proposal.title,
    body: proposal.body,
    timestamp: proposal.timestamp,
    likes: proposal.likes
  })
  return (dispatch) => {
    dispatch({
      type: 'EDIT_PROPOSAL'
    })
  }
}

function grabTargetProposal(proposal) {
  return (dispatch) => {
    dispatch({type: 'TARGET_PROPOSAL',
    proposal})
  }
}

  function clearTargetProposal() {
    return (dispatch) => {
      dispatch({type: 'CLEAR_TARGET_PROPOSAL'})
    }
  }

  function updateLikes(item, number) {
    let proposal = {author: item.author,
    title: item.title,
    body: item.body,
    timestamp: item.timestamp,
    likes: item.likes + number}
    firebase.database().ref(`proposals/${item.id}`).update({
      likes: proposal.likes
    })
      return (dispatch) => {
        dispatch({
          type: 'INCREMENT_LIKES', proposal
        })
    }
    getProposalsFromDatabase();
  }


export { sendProposalToDatabase, getProposalsFromDatabase, deleteProposal, grabTargetProposal, clearTargetProposal, editProposal, updateLikes }
