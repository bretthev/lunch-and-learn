import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDT87l_Lyz_zIyXHejRXapIEHZYWSEOTxU",
    authDomain: "lunch-and-learn-f36ea.firebaseapp.com",
    databaseURL: "https://lunch-and-learn-f36ea.firebaseio.com",
    storageBucket: "lunch-and-learn-f36ea.appspot.com",
    messagingSenderId: "418509108898"
})

const google = new firebase.auth.GoogleAuthProvider();


function signIn() {
  return (dispatch) => {
    firebase.auth().signInWithPopup(google)
    .then(currentUserData => {
      dispatch({
        type: 'USER_LOGGED_IN',
        uid: currentUserData.user.uid,
        username: currentUserData.user.displayName,
        email: currentUserData.user.email
      });
    })
  }
}

export { signIn, firebaseApp };
