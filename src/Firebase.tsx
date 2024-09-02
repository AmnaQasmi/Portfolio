
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOZBFarzBfrDLw8Z_751YMyRCS1xXCq1o",
  authDomain: "portfolio-3523e.firebaseapp.com",
  projectId: "portfolio-3523e",
  storageBucket: "portfolio-3523e.appspot.com",
  messagingSenderId: "59210817277",
  appId: "1:59210817277:web:810bed6a927769c1ff6894",
  measurementId: "G-WD5GY9MB05"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);