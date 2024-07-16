import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD_FOyFYJrzBKjIZiDvhlpDkaNfdLZP2qs",
  authDomain: "my-task-b0692.firebaseapp.com",
  projectId: "my-task-b0692",
  storageBucket: "my-task-b0692.appspot.com",
  messagingSenderId: "497702123348",
  appId: "1:497702123348:web:f2c300c1a584a628177ac1",
}

// app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig)
// auth => objeto com todas as configurações de Authentication
export const auth = getAuth(app)
// db => objeto com todas as configurações do Firestore
export const db = getFirestore(app)
