import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDrWmRYVROoc77HEnkcRuUUXh8gLCdXLjA",
  authDomain: "make-f23f1.firebaseapp.com",
  projectId: "make-f23f1",
  storageBucket: "make-f23f1.appspot.com",
  messagingSenderId: "1063484544496",
  appId: "1:1063484544496:web:30dd2c705463f01725f935"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)