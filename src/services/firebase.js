// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWsZUxZB08jmNR5k6_xiS8v8LsaF87lQw",
  authDomain: "dsamadeeasy-7347e.firebaseapp.com",
  projectId: "dsamadeeasy-7347e",
  storageBucket: "dsamadeeasy-7347e.appspot.com",
  messagingSenderId: "762781041509",
  appId: "1:762781041509:web:6993701bfde5b13c0f978c",
  measurementId: "G-HGW6M2E7MZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;