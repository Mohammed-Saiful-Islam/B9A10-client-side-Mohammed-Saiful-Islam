// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjEe8Ilb5zEFEkXaMbytQSCqHWJ1qgzqo",
  authDomain: "coffee-store-e632e.firebaseapp.com",
  projectId: "coffee-store-e632e",
  storageBucket: "coffee-store-e632e.appspot.com",
  messagingSenderId: "868288512132",
  appId: "1:868288512132:web:d980e71471228328ed42d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;