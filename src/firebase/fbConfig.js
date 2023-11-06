// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDOEUALSkX3HxKbfGx-VedFhjmJJcHPoso",
  authDomain: "chat-app-1bd02.firebaseapp.com",
  projectId: "chat-app-1bd02",
  storageBucket: "chat-app-1bd02.appspot.com",
  messagingSenderId: "397617050040",
  appId: "1:397617050040:web:94a3e0335bc510436b1f4d",
  measurementId: "G-W7P6Z7R7FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app)
