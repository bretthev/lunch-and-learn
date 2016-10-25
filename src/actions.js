const firebase = require('./firebase');
const database = firebase.database();

export const GET_CURRENT_USER = 'GET_CURRENT_USER';

export const getCurrentUser = (input) => {
  console.log(firebase)
  return {
    type: GET_CURRENT_USER,
    input
  }
}

export const testFirebase = (testText) => {
  return (dispatch) => {
    // database.ref('testing').set({test: 'is this working'})
    dispatch(getCurrentUser(testText))
  }
}
