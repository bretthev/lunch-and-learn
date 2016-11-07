import { map } from 'lodash';

const currentUser = ( state = {}, action ) => {
  switch(action.type) {
    case "SIGN_IN":
      return Object.assign({}, state, {
        uid: action.uid,
        username: action.username,
        email: action.email
      });
    case 'UPDATE_CURRENT_USER':
      return action.completeUser;
    case "USER_LOGGED_IN":
      return state;
    case "ANONYMOUS":
      return state;
    case "GET_USERS_FROM_DATABASE":
     let completeUser = action.usersWithKeys.filter(function(user) { return user.uid === state.uid })
     return completeUser[0]
    default:
      return state;
  }
};


export default currentUser;
