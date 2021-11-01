// Import the functions you need from the SDKs you need
import firebase  from "firebase/app";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz6remGPgHoO0gsZxx5QFjZzsTfIODoJI",
  authDomain: "crudbook-127e5.firebaseapp.com",
  projectId: "crudbook-127e5",
  storageBucket: "crudbook-127e5.appspot.com",
  messagingSenderId: "85964288116",
  appId: "1:85964288116:web:b6bd7b6a7b5544b8326121",
  measurementId: "G-XRPMR15E06"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase ;