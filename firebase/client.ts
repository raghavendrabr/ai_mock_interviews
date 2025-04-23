// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";

import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase-admin/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1p9lkvZXIpt-JPPtE0IAxU-gD-gz-JDc",
  authDomain: "prepwise-4fef0.firebaseapp.com",
  projectId: "prepwise-4fef0",
  storageBucket: "prepwise-4fef0.firebasestorage.app",
  messagingSenderId: "1093913586563",
  appId: "1:1093913586563:web:acf610227cf9722487e4b6",
  measurementId: "G-NPQVT68JZ5",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
