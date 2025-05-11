// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoxJenc0IDWGo6uweYd6_V1OlWaUs1TFc",
  authDomain: "chatapp-58cdf.firebaseapp.com",
  projectId: "chatapp-58cdf",
  storageBucket: "chatapp-58cdf.firebasestorage.app",
  messagingSenderId: "265170428384",
  appId: "1:265170428384:web:9d85f1dc624d0c6c3e8b85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)