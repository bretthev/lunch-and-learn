const proposals = ( state = [], action ) => {
  switch(action.type) {
    case 'GET_PROPOSALS_FROM_DATABASE':
      return state.concat(action.proposals)
    case 'ADD_PROPOSAL':
      return state.concat(action.proposal)
    default: return state;
  };
};

export default proposals;
