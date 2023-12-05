// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {auth} from "firebase/auth"
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
const analytics = getAnalytics(app);
const auth =  getAuth()

export {app,analytics,auth}