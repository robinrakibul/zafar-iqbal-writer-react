// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHSq52cMj4prKIZaXut5ulccy_3UszDZM",
  authDomain: "independent-service-prov-4ddd4.firebaseapp.com",
  projectId: "independent-service-prov-4ddd4",
  storageBucket: "independent-service-prov-4ddd4.appspot.com",
  messagingSenderId: "122433355770",
  appId: "1:122433355770:web:a528c5a623e1dc8953ae43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
