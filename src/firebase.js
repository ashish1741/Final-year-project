// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7UgSQlJC_QePehY6XCdbAIPqh1r5ThX4",
  authDomain: "pathshala-d6dee.firebaseapp.com",
  databaseURL: "https://pathshala-d6dee-default-rtdb.firebaseio.com",
  projectId: "pathshala-d6dee",
  storageBucket: "pathshala-d6dee.appspot.com",
  messagingSenderId: "218285131406",
  appId: "1:218285131406:web:8f9b8d558d39503280ebdf",
  measurementId: "G-HEPSPY4NN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth()
const db = getFirestore(app);

export { app, db,auth  };




