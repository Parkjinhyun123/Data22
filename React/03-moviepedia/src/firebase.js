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
  query,
  orderBy,
  limit,
  startAfter,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxsGndPgM3bnHcAw41aGjPi-uboA7rauU",
  authDomain: "asdf-5d972.firebaseapp.com",
  projectId: "asdf-5d972",
  storageBucket: "asdf-5d972.appspot.com",
  messagingSenderId: "450191732725",
  appId: "1:450191732725:web:8fb7315d1dad6143f6babc",
  measurementId: "G-SY8XW64PXW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName, order, limitNum, lq) {
  // const querySnapshot = await getDocs(collection(db, collectionName));
  let docQuery;
  if (lq === undefined) {
    docQuery = query(
      collection(db, collectionName),
      orderBy(order, "desc"),
      limit(limitNum)
      // asc:오름차 순 (굳이 x) desc: 내림차 순
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      orderBy(order, "desc"),
      startAfter(lq),
      limit(limitNum)
      // asc:오름차 순 (굳이 x) desc: 내림차 순
    );
  }
  const querySnapshot = await getDocs(docQuery);
  // 쿼리 query
  // orderBy, limit, startAfter
  const result = querySnapshot.docs;
  const lastQuery = result[result.length - 1];
  const reviews = result.map((doc) => doc.data());

  const option = "";

  return { reviews, lastQuery };
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
};
