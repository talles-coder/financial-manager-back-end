import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import dotenv from 'dotenv'
dotenv.config()

// Your web app's Firebase configuration
// TODO You need create .env file and configure
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId:process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
