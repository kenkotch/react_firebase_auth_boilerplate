import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDj_RmVTCYXsSQ7jjfCLsC1YE2SihL2YrM",
  authDomain: "fir-auth-def13.firebaseapp.com",
  databaseURL: "https://fir-auth-def13.firebaseio.com",
  projectId: "fir-auth-def13",
  storageBucket: "",
  messagingSenderId: "625224926842"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

export {
  auth
}
