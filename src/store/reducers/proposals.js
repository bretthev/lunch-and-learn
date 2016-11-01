const proposals = ( state = [], action ) => {
  switch(action.type) {
    case 'GET_PROPOSALS_FROM_DATABASE':
      return action.proposalsWithKeys
    case 'ADD_PROPOSAL':
      return state.concat(action.proposalObject)
    default: return state;
  };
};

export default proposals;
