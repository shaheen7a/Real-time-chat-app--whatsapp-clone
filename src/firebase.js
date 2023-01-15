import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZAL0uzvNTewd_D6Lss_L80xiikADfLPU",
  authDomain: "whatsapp-clone-252f2.firebaseapp.com",
  projectId: "whatsapp-clone-252f2",
  storageBucket: "whatsapp-clone-252f2.appspot.com",
  messagingSenderId: "498092273996",
  appId: "1:498092273996:web:41a5d2bf47f65821695fe9",
  measurementId: "G-ZJETCS0R0V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
export default db;