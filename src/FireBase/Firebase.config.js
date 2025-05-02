// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqvR1XJo-2R8G6rGPr4jB3VPZblhXLr5M",
  authDomain: "dragon-news-900d1.firebaseapp.com",
  projectId: "dragon-news-900d1",
  storageBucket: "dragon-news-900d1.firebasestorage.app",
  messagingSenderId: "1050564855436",
  appId: "1:1050564855436:web:5b24b53a4f86c558efdda9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;