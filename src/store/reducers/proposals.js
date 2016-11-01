const proposals = ( state = [], action ) => {
  switch(action.type) {
    case 'GET_PROPOSALS_FROM_DATABASE':
      return action.proposalsWithKeys
    case 'ADD_PROPOSAL':
      return state.concat(action.proposalObject)
    case 'DELETE_PROPOSAL':
      const proposalKey = action.key
      return state.filter(proposal => proposal.key !== proposalKey )
    default: return state;
  };
};

export default proposals;
