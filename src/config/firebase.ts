// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyDZmvOvHfwbmNTShskirzRPv0oqOSe_c",
  authDomain: "react-episode1.firebaseapp.com",
  projectId: "react-episode1",
  storageBucket: "react-episode1.appspot.com",
  messagingSenderId: "511635160359",
  appId: "1:511635160359:web:c729138ac3ae11dfc27d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

