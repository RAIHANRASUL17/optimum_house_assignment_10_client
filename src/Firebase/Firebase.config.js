// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log("check Env:", import.meta.env.VITE_apiKey)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;



/*

  apiKey: "AIzaSyDny9KUVkugQhl9o6wReSOeeQV8yCorPUY",
  authDomain: "assignment-84bbe.firebaseapp.com",
  projectId: "assignment-84bbe",
  storageBucket: "assignment-84bbe.appspot.com",
  messagingSenderId: "924366941335",
  appId: "1:924366941335:web:c89d3c625a5fa486b28dd2"

*/ 