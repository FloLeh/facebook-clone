import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDb4JEV8gny8bKzQLiUTSGkEiUyt1sCJH8",
  authDomain: "facebook-clone-e7768.firebaseapp.com",
  databaseURL: "https://facebook-clone-e7768.firebaseio.com",
  projectId: "facebook-clone-e7768",
  storageBucket: "facebook-clone-e7768.appspot.com",
  messagingSenderId: "903467189551",
  appId: "1:903467189551:web:c8c42126b57a18e8dd4dda",
  measurementId: "G-NJFHFHNP41"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db