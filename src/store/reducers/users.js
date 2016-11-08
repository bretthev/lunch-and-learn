const users = ( state = [], action ) => {
  switch(action.type) {
    case 'GET_USERS_FROM_DATABASE':
      return action.usersWithKeys
    case 'ADD_USER':
      return state
    default: return state
  }
}

export default users
