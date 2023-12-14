import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCt_ryGXwrRNWyI7sZL_bjfplQnw21YHsQ",
  authDomain: "project-03-04-78bcf.firebaseapp.com",
  projectId: "project-03-04-78bcf",
  storageBucket: "project-03-04-78bcf.appspot.com",
  messagingSenderId: "714216538777",
  appId: "1:714216538777:web:4d109358cbd0891123ee08",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const result = querySnapshot.docs;
  const reviews = result.map((doc) => doc.data());
  console.log(reviews);
  return { reviews };
}

export {
  db,
  getDocs,
  getDoc,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  // addDatas,
  deleteDoc,
  updateDoc,
  deleteField,
};
