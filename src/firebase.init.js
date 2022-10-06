// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmM5uIvgZQi9n7-JPnRr1qzIb12fFp-Pc",
  authDomain: "studentsystem-d9524.firebaseapp.com",
  projectId: "studentsystem-d9524",
  storageBucket: "studentsystem-d9524.appspot.com",
  messagingSenderId: "966229480135",
  appId: "1:966229480135:web:8330516cc3fcb876ce64e2",
  measurementId: "G-0CGTNBD10H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;