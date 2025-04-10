// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANG0Js5dzot5demnptAmz0TSepEPNEk-Q",
  authDomain: "prepview-ai.firebaseapp.com",
  projectId: "prepview-ai",
  storageBucket: "prepview-ai.firebasestorage.app",
  messagingSenderId: "110598066790",
  appId: "1:110598066790:web:d7c18a563b9e7ad71353a7",
  measurementId: "G-F2TD810EH1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
