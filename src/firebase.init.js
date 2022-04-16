// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6zQmht77rFo-xjkkc_ncL5KApWIapMRg",
  authDomain: "boost-learner.firebaseapp.com",
  projectId: "boost-learner",
  storageBucket: "boost-learner.appspot.com",
  messagingSenderId: "335682732749",
  appId: "1:335682732749:web:9b8dc193b2b231b1e35f84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;