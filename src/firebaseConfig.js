// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyIAsudeNJyb6aMBv_lbOYq5wU8BtVKBo",
  authDomain: "codecraft-2c38d.firebaseapp.com",
  databaseURL: "https://codecraft-2c38d-default-rtdb.firebaseio.com",
  projectId: "codecraft-2c38d",
  storageBucket: "codecraft-2c38d.appspot.com",
  messagingSenderId: "145780509631",
  appId: "1:145780509631:web:0230c2d6b210321e382f0a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);