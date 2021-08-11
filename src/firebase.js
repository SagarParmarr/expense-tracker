// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBe_g52pUtBu5VGGMcyK3bLl7PnIUcLZ3Y",
  authDomain: "expense-tracker-06.firebaseapp.com",
  projectId: "expense-tracker-06",
  storageBucket: "expense-tracker-06.appspot.com",
  messagingSenderId: "790905909631",
  appId: "1:790905909631:web:9daf6fb8c0dd0080cb2a4a",
  measurementId: "G-PZ8C1NH73N",
});

const db = firebaseApp.firestore();

export default db;
