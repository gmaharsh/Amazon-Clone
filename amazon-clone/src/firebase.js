import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjZTP6P9Id0HupKeFK69_yy4gThwKQUig",
  authDomain: "clone-655e8.firebaseapp.com",
  databaseURL: "https://clone-655e8.firebaseio.com",
  projectId: "clone-655e8",
  storageBucket: "clone-655e8.appspot.com",
  messagingSenderId: "524159980168",
  appId: "1:524159980168:web:db9ad8b21a17418313853d",
  measurementId: "G-9WWX7J9ST4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };