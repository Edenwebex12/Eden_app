import firebase from "firebase"
import "firebase/firestore"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUMsT_FpSjgaFmywvYYo3c3_qYOowwyD0",
  authDomain: "eden-firebase.firebaseapp.com",
  projectId: "eden-firebase",
  storageBucket: "eden-firebase.appspot.com",
  messagingSenderId: "680897385650",
  appId: "1:680897385650:web:656078e74e649f2d9225ab",
  measurementId: "${config.measurementId}",
}

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

firebase.initializeApp(firebaseConfig)
export const storage = firebase.storage()
export default firebase
