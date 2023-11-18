// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM-v3TKV4yTrV9xXWfaGLIbjC99iCyg6w",
  authDomain: "skysync-scheduler.firebaseapp.com",
  projectId: "skysync-scheduler",
  storageBucket: "skysync-scheduler.appspot.com",
  messagingSenderId: "1097564178114",
  appId: "1:1097564178114:web:c0d950afd261c2acef5d5b",
  measurementId: "G-EDHT1NEE8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);