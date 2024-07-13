import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDg8pphkwEoJAuzCVrdJRyg_29lUKUfaM8",
  authDomain: "bodegatech-58e49.firebaseapp.com",
  projectId: "bodegatech-58e49",
  storageBucket: "bodegatech-58e49.appspot.com",
  messagingSenderId: "791312526148",
  appId: "1:791312526148:web:3c23d498a95d7dff678511"
};

const app = firebase.initializeApp(firebaseConfig)

const auth = app.auth()
const db = app.firestore()

export { auth, db }