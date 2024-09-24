import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  // THE CONFIG FROM YOUR FIREBASE CONSOLE
  apiKey: '',
  authDomain: 'blogapp-58ba1.firebaseapp.com',
  projectId: 'blogapp-58ba1',
  storageBucket: 'blogapp-58ba1.appspot.com',
  messagingSenderId: '1040007699486',
  appId: '1:1040007699486:web:7072a04938c3166c93e20f',
  measurementId: 'G-0WXQJW1Z7G'
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
