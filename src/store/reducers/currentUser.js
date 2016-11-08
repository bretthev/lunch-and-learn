const currentUser = ( state = {}, action ) => {
  switch(action.type) {
    case "SIGN_IN":
      return Object.assign({}, state, {
        uid: action.uid,
        username: action.username,
        email: action.email
      });
    // case "GET_USERS_FROM_DATABASE":
    //   return action.completeUser;
    case "USER_LOGGED_IN":
      return state;
    case "ANONYMOUS":
      return state;
    case "USER_LOGGED_OUT":
      return {};
    default:
      return state;
  }
};


export default currentUser;

export const getIsUserSignedIn = (state) => Boolean(state.email);
