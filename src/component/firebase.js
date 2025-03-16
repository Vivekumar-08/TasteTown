// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASm9agYt7DnVHYAVCHOrWiza0xdY7gtsE",
  authDomain: "tastetown-4d008.firebaseapp.com",
  projectId: "tastetown-4d008",
  storageBucket: "tastetown-4d008.firebasestorage.app",
  messagingSenderId: "417141470467",
  appId: "1:417141470467:web:0d8b066c13c257b2aa6536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
export default app;