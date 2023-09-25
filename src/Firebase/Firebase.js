import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc } from "firebase/firestore"; 




  const firebaseConfig = {
    apiKey: "AIzaSyAvreirxv4i5AX2-ERNFuMUG9r3plWc8V8",
    authDomain: "coffeechatappdatabase.firebaseapp.com",
    projectId: "coffeechatappdatabase",
    storageBucket: "coffeechatappdatabase.appspot.com",
    messagingSenderId: "241384978362",
    appId: "1:241384978362:web:f99de218ed099d32104f83",
    measurementId: "G-MR413LDJV7"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 

export default app;