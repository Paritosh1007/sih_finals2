// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBibaslXgrNVUSyfQAPb5ZuNl3GoeatafU",
  authDomain: "nbase-be35c.firebaseapp.com",
  projectId: "nbase-be35c",
  storageBucket: "nbase-be35c.appspot.com",
  messagingSenderId: "235709877785",
  appId: "1:235709877785:web:dc7f4d16c04b4a5a76e488",
  measurementId: "G-RVJDCWB4CS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export {app,auth};