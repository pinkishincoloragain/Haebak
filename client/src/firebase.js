import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// fucking API key.
const firebaseConfig = {
  apiKey: "AIzaSyDhzaHuJLMiTwYXnnLrg7whIx0vUyp68I0",
  authDomain: "knuhouse-9c164.firebaseapp.com",
  projectId: "knuhouse-9c164",
  storageBucket: "knuhouse-9c164.appspot.com",
  messagingSenderId: "96455573988",
  appId: "1:96455573988:web:4dc3a901b3ee1352f707f1",
};

firebase.initializeApp(firebaseConfig);

// manage login
export const authService = firebase.auth();
// manage user info + user data
export const dbService = firebase.firestore();
// manage recording file
export const storageService = firebase.storage();
