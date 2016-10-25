const initialState = {
  currentUser: {
    name: 'Brett'
  }
}

const currentUser = ( state = initialState, action ) => {
  switch(action.type) {
    case "GET_CURRENT_USER":
      return Object.assign({}, state.currentUser.name, action.input);
    default:
      return state;
  }
};


export default currentUser;
