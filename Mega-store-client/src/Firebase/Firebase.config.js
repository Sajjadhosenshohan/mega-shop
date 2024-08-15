// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      // apiKey: import.meta.env.VITE_apiKey,
      // authDomain: import.meta.env.VITE_authDomain,
      // projectId: import.meta.env.VITE_projectId,
      // storageBucket: import.meta.env.VITE_storageBucket,
      // messagingSenderId: import.meta.env.VITE_messagingSenderId,
      // appId: import.meta.env.VITE_appId,
      apiKey: "AIzaSyCBWQZFylcZQbVhK1PxQt3IBy8pQDfUQaE",
      authDomain: "mega-store-22b5b.firebaseapp.com",
      projectId: "mega-store-22b5b",
      storageBucket: "mega-store-22b5b.appspot.com",
      messagingSenderId: "217483175560",
      appId: "1:217483175560:web:899043c6955739c419613d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
