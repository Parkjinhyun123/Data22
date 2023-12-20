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
  exists,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

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

async function getDatas(collectionName, options) {
  // throw new Error("기능");
  // const querySnapshot = await getDocs(collection(db, collectionName));
  let docQuery;
  if (options.lq === undefined) {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      limit(options.limit)
      // asc:오름차 순 (굳이 x) desc: 내림차 순
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      startAfter(options.lq),
      limit(options.limit)
      // asc:오름차 순 (굳이 x) desc: 내림차 순
    );
  }
  const querySnapshot = await getDocs(docQuery);
  // 쿼리 query
  // orderBy, limit, startAfter
  const result = querySnapshot.docs;
  const lastQuery = result[result.length - 1];
  // 1.
  const reviews = result.map((doc) => ({ docId: doc.id, ...doc.data() }));

  // 2.
  // const tempArr = [];
  // for (let i = 0; i < result.length - 1; i++) {
  //   const obj = result[i].data();
  //   obj.docId = result[i].id;
  //   tempArr.push(obj);
  // }
  // reviews = tempArr;

  // 3.
  // const reviews = result.map((doc) => {
  //   const obj = doc.data();
  //   obj.docId = doc.id;
  //   return obj;
  // });

  return { reviews, lastQuery };
}

async function deleteDatas(collectionName, docId) {
  await deleteDoc(doc(db, collectionName, docId));
}

async function addDatas(collectionName, formData) {
  const uuid = crypto.randomUUID();
  const path = `movie/${uuid}`;
  const lastId = (await getLastId(collectionName)) + 1;
  const time = new Date().getTime();
  //  파일을 저장하고 url을 받아온다.
  const url = await uploadImage(path, formData.imgUrl);

  formData.id = lastId;
  formData.creadtedAt = time;
  formData.updatedAt = time;
  formData.imgUrl = url;

  const result = await addDoc(collection(db, collectionName), formData);
  const docSnap = await getDoc(result);
  if (docSnap.exists) {
    const review = { docId: doc.id, ...docSnap.data() };
    return { review };
  }
}

async function uploadImage(path, imgFile) {
  const storage = getStorage();
  const imageRef = ref(storage, path);

  //File 객체를 스토리지에 저장
  await uploadBytes(imageRef, imgFile);

  //  저장한 File의 url을 받아온다
  const url = await getDownloadURL(imageRef);
  return url;
}

async function getLastId(collectionName) {
  const docQuery = query(
    collection(db, collectionName),
    orderBy("id", "desc"),
    limit(1)
  );
  const lastDoc = await getDocs(docQuery);
  const lastId = lastDoc.docs[0].data().id;
  return lastId;
}

export {
  db,
  getDocs,
  getDoc,
  collection,
  getDatas,
  setDoc,
  addDatas,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  deleteDatas,
};
