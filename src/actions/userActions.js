import firebase from 'firebase';
import { map, extend } from 'lodash';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDT87l_Lyz_zIyXHejRXapIEHZYWSEOTxU",
    authDomain: "lunch-and-learn-f36ea.firebaseapp.com",
    databaseURL: "https://lunch-and-learn-f36ea.firebaseio.com",
    storageBucket: "lunch-and-learn-f36ea.appspot.com",
    messagingSenderId: "418509108898"
})

const google = new firebase.auth.GoogleAuthProvider();
const userList = firebase.database().ref('users');

const signIn = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(google)
    .then(currentUserData => {
      dispatch({
        type: 'SIGN_IN',
        uid: currentUserData.user.uid,
        username: currentUserData.user.displayName,
        email: currentUserData.user.email
      });
      addToUserList(currentUserData.user);
    })
  }
}

const addToUserList = (user) => {
    userList.push({
    uid: user.uid,
    username: user.displayName,
    email: user.email,
    isAdmin: false
  })
  return (dispatch) => {
    dispatch({
      type: 'ADD_USER'
    })
  }
}

const listenForUser = () => {
  return (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: 'SIGN_IN',
          uid: user.uid,
          username: user.displayName,
          email: user.email
        })
      }
    })
  }
}

const getUsersFromDatabase = () => {
  return (dispatch, getState) => {
    let users;
    userList.on('value', (snapshot) => {
      users = snapshot.val();
      let usersObject = map(users, (value, key) => extend(value, { key }))
      let usersWithKeys = []
      map(usersObject, (u) => { usersWithKeys.push(u)})
      dispatch({
        type: 'GET_USERS_FROM_DATABASE',
        usersWithKeys
      })
    })
  }
}




export { firebaseApp, signIn, getUsersFromDatabase, listenForUser };
