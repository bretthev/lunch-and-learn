const users = ( state = [], action ) => {
  switch(action.type) {
    case 'GET_USERS_FROM_DATABASE':
      return action.usersWithKeys
    case 'ADD_USER':
      return state
    default: return state
  }
}

const getUsers = (state) => state.users

module.exports = { users, getUsers }
