// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCSfT3oQXInNk1dw2Vfaf0Gw6fZD6L7QM",
  authDomain: "otpdemo-14bb7.firebaseapp.com",
  projectId: "otpdemo-14bb7",
  storageBucket: "otpdemo-14bb7.appspot.com",
  messagingSenderId: "1070699779455",
  appId: "1:1070699779455:web:9f3182d78de71f0729764a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
