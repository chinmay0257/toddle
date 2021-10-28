import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDx0A8i6ARD4QwFKnkqzbWiO_WrFBTt6ZY",
  authDomain: "toddle-d13ec.firebaseapp.com",
  databaseURL: "https://toddle-d13ec-default-rtdb.firebaseio.com",
  projectId: "toddle-d13ec",
  storageBucket: "toddle-d13ec.appspot.com",
  messagingSenderId: "626438130799",
  appId: "1:626438130799:web:225d1a439f9ce07cb0d19a"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
