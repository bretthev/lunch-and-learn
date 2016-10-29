import firebase from 'firebase';
// import firebaseApp from './authActions';

// const proposalsDatabase = firebaseApp.database().ref('proposals');


function sendProposalToStore(proposalForm) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_PROPOSAL',
      author: proposalForm.author,
      title: proposalForm.title,
      body: proposalForm.body
    })
  }
}

// function sendProposalToDatabase(proposalObject) {
//   return (dispatch) => {
//     proposalsDatabase.push({
//       author: proposalObject.user,
//       title: proposalObject.title,
//       body: proposalObject.body
//     })
//   }
// }

export { sendProposalToStore }
