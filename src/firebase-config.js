import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyDgY5pckkjNi0YQEiuiHxDZWjRp_7-1Ihs",
  authDomain: "testfirebase-ec493.firebaseapp.com",
  databaseURL: "https://testfirebase-ec493-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testfirebase-ec493",
  storageBucket: "testfirebase-ec493.appspot.com",
  messagingSenderId: "192158806440",
  appId: "1:192158806440:web:747d91c0730cfb8a74ad9d",
  measurementId: "G-PLQ2BFC39M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);