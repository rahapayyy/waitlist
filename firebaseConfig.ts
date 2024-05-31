// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT6MB5AilTQYR7GVmmAj1SDubRpaF1__w",
  authDomain: "rahapay-waitlist.firebaseapp.com",
  databaseURL: "https://rahapay-waitlist-default-rtdb.firebaseio.com",
  projectId: "rahapay-waitlist",
  storageBucket: "rahapay-waitlist.appspot.com",
  messagingSenderId: "684883910952",
  appId: "1:684883910952:web:cb7c48d96bd3354cb8f01d",
  measurementId: "G-J0KJ1QWHT3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
