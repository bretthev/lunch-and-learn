import { initialState } from '../initialState';

const currentUser = ( state = initialState, action ) => {
  switch(action.type) {
    case "USER_LOGGED_IN":
      return Object.assign({}, state.currentUser, {
        uid: action.uid,
        username: action.username,
        email: action.email
      });
    default:
      return state;
  }
};

export default currentUser;
