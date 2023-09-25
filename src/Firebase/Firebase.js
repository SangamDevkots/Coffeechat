import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc } from "firebase/firestore"; 



const firebaseConfig = {
  apiKey: "AIzaSyAeo6vJY9Pb2emHC7TePTC0Z_-80FAOWcw",
  authDomain: "chatapp-da4e2.firebaseapp.com",
  projectId: "chatapp-da4e2",
  storageBucket: "chatapp-da4e2.appspot.com",
  messagingSenderId: "373754629496",
  appId: "1:373754629496:web:52cc1016179d2609df0c8d",
  measurementId: "G-QMWM1RDSEH"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 

export default app;