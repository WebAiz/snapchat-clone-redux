import firebaseConfig from './firebaseAPI'
import firebase from 'firebase'


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

// popup auth is done by provider
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider }
