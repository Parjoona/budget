import * as firebase from 'firebase'
import config from './config'

firebase.initializeApp(config)
const database = firebase.database()

// Provider needed for login
const googleProvider = new firebase.auth.GoogleAuthProvider()

export {
  firebase,
  googleProvider,
  database as default
}