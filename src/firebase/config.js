// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import  { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnH555taN6Qo9BM1iehdRgQIow3vc3aBM",
  authDomain: "auth-reacfirebase.firebaseapp.com",
  projectId: "auth-reacfirebase",
  storageBucket: "auth-reacfirebase.appspot.com",
  messagingSenderId: "1008607817753",
  appId: "1:1008607817753:web:a2171c459d47998feffa88"
};

// Initialize Firebasee
export const FirebaseApp = initializeApp(firebaseConfig);
// para la autenticacion
export const firebseAuth = getAuth(FirebaseApp); 

// para la base de datos firestore
export const fireBaseDb= getFirestore(FirebaseApp);
