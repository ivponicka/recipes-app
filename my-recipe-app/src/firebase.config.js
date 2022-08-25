
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABz2NjwwjZsAKGZDMTAcL8oGBc6tWfpK4",
  authDomain: "my-recipe-app-3279d.firebaseapp.com",
  projectId: "my-recipe-app-3279d",
  storageBucket: "my-recipe-app-3279d.appspot.com",
  messagingSenderId: "159361421372",
  appId: "1:159361421372:web:5c5eca2252aa897c6cf339"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };