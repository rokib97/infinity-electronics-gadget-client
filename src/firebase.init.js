// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXVjoE_jXbR6uzguh-qsRJLO28vGdi64w",
  authDomain: "infinity-electronics-gadget.firebaseapp.com",
  projectId: "infinity-electronics-gadget",
  storageBucket: "infinity-electronics-gadget.appspot.com",
  messagingSenderId: "358006485201",
  appId: "1:358006485201:web:12f903bc092de925c695f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
