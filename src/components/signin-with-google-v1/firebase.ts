import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: process.env.REACT_APP_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: process.env.REACT_APP_APP_ID || "YOUR_APP_ID",
  measurementId: process.env.REACT_APP_MESUREMENT_ID || "YOUR_MESUREMENT_ID"
};

// Initialize Firebase
const initFirebase = () => initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default initFirebase;