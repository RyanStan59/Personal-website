// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAssR59Utr7pk75QOqVvZs7BTswsH96OSs",
  authDomain: "personal-website-186d9.firebaseapp.com",
  projectId: "personal-website-186d9",
  storageBucket: "personal-website-186d9.firebasestorage.app",
  messagingSenderId: "347818677184",
  appId: "1:347818677184:web:2f8b7216e71b45fdb4ee25",
  measurementId: "G-7GQ2B08XLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);