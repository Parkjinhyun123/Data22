import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
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
  where,
  query,
  // getAuth,
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// const authO = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

const firebaseConfig = {
  apiKey: "AIzaSyAJhV_ftNH_AkA9c_TVqei9wPacHQmWoYY",
  authDomain: "md-project-team2.firebaseapp.com",
  projectId: "md-project-team2",
  storageBucket: "md-project-team2.appspot.com",
  messagingSenderId: "736372498794",
  appId: "1:736372498794:web:0c59c5c64abdbc86008513",
  measurementId: "G-WNP30PS0DL",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));

  return querySnapshot;
}

async function idDatas(collectionName, checkId) {
  const Snapshot = await getDocs(
    query(collection(db, collectionName), where("memberId", "==", checkId))
  );
  return Snapshot.size;
}

async function addDatas(collectionName, dataObj) {
  // 문서ID 부여
  //   await setDoc(doc(db, "member", "member1"), dataObj);

  // 문서ID 자동
  await addDoc(collection(db, collectionName), dataObj);
}

// 문서 삭제
async function deleteDatas(collectionName, docId) {
  await deleteDoc(doc(db, collectionName, docId));
}

async function updateDatas(collectionName, docId, updateInfoObj) {
  const docRef = await doc(db, collectionName, docId);
  const docData = await getDoc(docRef);
  console.log(docData.data());
  debugger;
  // 문서 필드 데이터 수정
  await updateDoc(docRef, updateInfoObj);
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  addDatas,
  deleteDoc,
  deleteDatas,
  updateDoc,
  deleteField,
  updateDatas,
  idDatas,
  // auth,
};
