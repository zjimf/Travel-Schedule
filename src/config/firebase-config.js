import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWuB40QJDckJlWS9Jmhf1t3XVZydBoTfs",
  authDomain: "ncusetravelschedule.firebaseapp.com",
  projectId: "ncusetravelschedule",
  storageBucket: "ncusetravelschedule.appspot.com",
  messagingSenderId: "684450415228",
  appId: "1:684450415228:web:09f98395a6ef066cc3fff9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, db, auth };
