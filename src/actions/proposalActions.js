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
      likes: 0,
      likedBy: ['defaultLike']
    })
    return (dispatch) => {
      dispatch({
        type: 'ADD_PROPOSAL'
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
    likes: proposal.likes,
    likedBy: proposal.likedBy,
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

  function updateLikes(item, number, uid) {
    const filterForRepeatLikes = (likedIds) => likedIds !== uid
    let likedByArray = item.likedBy.filter(filterForRepeatLikes)
    if (number === 1) { likedByArray = likedByArray.concat(uid) }
    debugger;
    let proposal = {
      author: item.author,
      title: item.title,
      body: item.body,
      timestamp: item.timestamp,
      likes: item.likes + number,
      likedBy: likedByArray
    }
    firebase.database().ref(`proposals/${item.id}`).update({
      likes: proposal.likes,
      likedBy: proposal.likedBy
    })
      return (dispatch) => {
        dispatch({
          type: 'UPDATE_LIKES', proposal
        })
    }
    getProposalsFromDatabase();
  }


export { sendProposalToDatabase, getProposalsFromDatabase, deleteProposal, grabTargetProposal, clearTargetProposal, editProposal, updateLikes }
