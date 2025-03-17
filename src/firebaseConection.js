import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBIjbmSczh7Lrdpl3-MiF6MME7mIFqX8gk",
  authDomain: "curso-b2bab.firebaseapp.com",
  projectId: "curso-b2bab",
  storageBucket: "curso-b2bab.firebasestorage.app",
  messagingSenderId: "1084486878888",
  appId: "1:1084486878888:web:79bbf2b74079d8d325249d",
  measurementId: "G-57DCTSTVZT"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };