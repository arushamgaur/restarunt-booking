// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env.VITE_SOME_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG3v7VtVBpCYnPdyPMAq3TinPVaM_0brE",
  authDomain: "my-restarunt.firebaseapp.com",
  projectId: "my-restarunt",
  storageBucket: "my-restarunt.appspot.com",
  messagingSenderId: "404770726425",
  appId: "1:404770726425:web:da9a2316accaea0dae4088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
