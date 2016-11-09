import firebase from 'firebase';
import firebaseApp from './userActions'
import { map, extend } from 'lodash';

const proposalsDatabase = firebase.database().ref('proposals');

const sendProposalToDatabase = (proposalObject) => {
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

const getProposalsFromDatabase = () => {
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

const deleteProposal = (key) => {
  firebase.database().ref(`proposals/${key}`).remove();
  return (dispatch, getState) => {
    dispatch({
      type: 'DELETE_PROPOSAL',
      key
    })
  }
}

const editProposal = (proposal) => {
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

const grabTargetProposal = (proposal) => {
  return (dispatch) => {
    dispatch({type: 'TARGET_PROPOSAL',
    proposal})
  }
}

  const clearTargetProposal = () => {
    return (dispatch) => {
      dispatch({type: 'CLEAR_TARGET_PROPOSAL'})
    }
  }

  const updateProposalInFirebase = (id, newLikes, newLikedBy) => {
    firebase.database().ref(`proposals/${id}`).update({ likes: newLikes, likedBy: newLikedBy})
  }

  const checkIfUserHasLikedProposal = (likedByArray, number, uid) => {
    const filterForRepeatLikes = (likedIds) => likedIds !== uid
    let filteredArray = likedByArray.filter(filterForRepeatLikes)
    if (number === 1 ) { filteredArray = filteredArray.concat(uid) }
    return filteredArray
  }

  const updateLikes = (item, number, uid) => {
    let likedByArray = checkIfUserHasLikedProposal(item.likedBy, number, uid)
    const proposal = Object.assign({}, item, { likes: item.likes + number, likedBy: likedByArray} )
    updateProposalInFirebase(item.id, proposal.likes, proposal.likedBy)
      return (dispatch) => {
        dispatch({
          type: 'UPDATE_LIKES', proposal
        })
    }
    getProposalsFromDatabase();
  }


export { sendProposalToDatabase, getProposalsFromDatabase, deleteProposal, grabTargetProposal, clearTargetProposal, editProposal, updateLikes }
