// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHb53U7gQu_c0sE0if1MFEIbLKGlHBsQY",
  authDomain: "fir-89329.firebaseapp.com",
  projectId: "fir-89329",
  storageBucket: "fir-89329.appspot.com",
  messagingSenderId: "970417576000",
  appId: "1:970417576000:web:33886a616d647d4a1ea7a5",
  measurementId: "G-NN1CLM3KJQ"
};

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };