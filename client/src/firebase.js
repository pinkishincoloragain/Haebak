import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// fucking API key.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "knuhouse-9c164.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "knuhouse-9c164.appspot.com",
  messagingSenderId: "96455573988",
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

// manage login
export const authService = firebase.auth();
// manage user info + user data
export const dbService = firebase.firestore();
// manage recording file
export const storageService = firebase.storage();
