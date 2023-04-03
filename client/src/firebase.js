import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider }from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDe7PG0j7MAtvNyChPVjvTbJzgaXjh7ZF0",
  authDomain: "clone-1dabd.firebaseapp.com",
  projectId: "clone-1dabd",
  storageBucket: "clone-1dabd.appspot.com",
  messagingSenderId: "408086114819",
  appId: "1:408086114819:web:ec8cb0f95cc1c7b371d436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app;