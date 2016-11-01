const proposals = ( state = [], action ) => {
  switch(action.type) {
    case 'GET_PROPOSALS_FROM_DATABASE':
      // return Object.assign({}, state, action.proposalsWithKeys)
      return state.concat(action.proposalsWithKeys)
    case 'ADD_PROPOSAL':
      return state.concat(action.proposalObject)
    // case 'EDIT_PROPOSAL':
    //   const newState = {...state};
    //   newState.
    case 'DELETE_PROPOSAL':
      return state
    default: return state;
  };
};

export default proposals;
