const firebase = require('firebase');

var config = {
   apiKey: "AIzaSyAlqfYXgSiB3iOMTOSJWhgSw-2QH0WxyrQ",
   authDomain: "presentation-location.firebaseapp.com",
   databaseURL: "https://presentation-location.firebaseio.com",
   storageBucket: "presentation-location.appspot.com",
   messagingSenderId: "259956468330"
 };
firebase.initializeApp(config);

module.exports = firebase;
