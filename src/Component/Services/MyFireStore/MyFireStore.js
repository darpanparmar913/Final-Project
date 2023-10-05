import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZquz01xjHilWgMXMoLpAZJfL0zRU1zFw",
  authDomain: "flipkart-shop-c8245.firebaseapp.com",
  projectId: "flipkart-shop-c8245",
  storageBucket: "flipkart-shop-c8245.appspot.com",
  messagingSenderId: "269323674666",
  appId: "1:269323674666:web:9affaa2a173b83a2418f53"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export default app;

