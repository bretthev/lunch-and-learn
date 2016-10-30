import firebase from 'firebase';


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

export { sendProposalToStore }
