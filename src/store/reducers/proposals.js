const proposals = ( state = [], action ) => {
  switch(action.type) {
    case 'GET_PROPOSALS_FROM_DATABASE':
      return action.proposalsWithKeys
    case 'ADD_PROPOSAL':
      return state
    case 'EDIT_PROPOSAL':
      return state
    case 'DELETE_PROPOSAL':
      const proposalKey = action.key
      return state.filter(proposal => proposal.key !== proposalKey )
    default: return state;
  };
};

const targetProposal = ( state = {title: '', body: ''}, action ) => {
  switch(action.type) {
    case 'TARGET_PROPOSAL':
      return Object.assign({}, state, action.proposal)
    case 'CLEAR_TARGET_PROPOSAL':
      return Object.assign({}, state, {title: '', body: '', id: null})
  default: return state;
  }
}

module.exports = { targetProposal, proposals }
