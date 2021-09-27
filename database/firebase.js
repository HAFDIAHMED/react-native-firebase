// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlZWSqYV9g9mWjUh1gE5LgmmfXOBy-I5I",
  authDomain: "fireproj-3b453.firebaseapp.com",
  projectId: "fireproj-3b453",
  storageBucket: "fireproj-3b453.appspot.com",
  messagingSenderId: "414910703034",
  appId: "1:414910703034:web:338e0ac9ade2a7952de983",
  measurementId: "G-08504PLN5B"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
export const AnimalsRef = db.collection("animals");
export{firebase};