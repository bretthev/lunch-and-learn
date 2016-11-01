const currentUser = ( state = {}, action ) => {
  switch(action.type) {
    case "SIGN_IN":
      return Object.assign({}, state, {
        uid: action.uid,
        username: action.username,
        email: action.email
      });
    case "USER_LOGGED_IN":
      return state;
    case "ANONYMOUS":
      return state;
    default:
      return state;
  }
};


export default currentUser;
