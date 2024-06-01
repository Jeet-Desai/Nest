import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBS1rVUokyF6VJzHOMm8Z4z1g1QfQgfG-8",
  authDomain: "nest-17.firebaseapp.com",
  projectId: "nest-17",
  storageBucket: "nest-17.appspot.com",
  messagingSenderId: "663030114231",
  appId: "1:663030114231:web:d707e8f9e4e4b726856a32",
  measurementId: "G-VDF7JXK8ZJ"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const firestore=getFirestore(app);
const storage=getStorage(app);

export {app,auth,firestore,storage}