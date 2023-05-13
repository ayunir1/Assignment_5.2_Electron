import { boot } from 'quasar/wrappers'
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDCPXVASdXKDt0H-WefS54yDoZvtdUzSGA",
  authDomain: "quitter-e82e6.firebaseapp.com",
  projectId: "quitter-e82e6",
  storageBucket: "quitter-e82e6.appspot.com",
  messagingSenderId: "562636447946",
  appId: "1:562636447946:web:31f0d0f1d9065fd380d433"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db


