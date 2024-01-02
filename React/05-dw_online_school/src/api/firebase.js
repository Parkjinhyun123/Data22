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
  deleteObject,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCz-3p4dUy0CM7KVWCFARW1cg0YYTnW538",
  authDomain: "dwos-c4269.firebaseapp.com",
  projectId: "dwos-c4269",
  storageBucket: "dwos-c4269.appspot.com",
  messagingSenderId: "106161025804",
  appId: "1:106161025804:web:c483b75ee0c27edbe30f29",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName, options) {
  // throw new Error("기능");
  // const querySnapshot = await getDocs(collection(db, collectionName));
  let docQuery;
  if (options === undefined) {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const result = querySnapshot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }));
    return result;
  } else if (options.lq === undefined) {
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

async function deleteDatas(collectionName, docId, imgUrl) {
  const storage = getStorage();
  try {
    const deleteRef = ref(storage, imgUrl);
    await deleteObject(deleteRef);
    await deleteDoc(doc(db, collectionName, docId));
  } catch (error) {
    return false;
  }
  return false;
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

async function updateDatas(collectionName, formData, docId, imgUrl) {
  const docRef = await doc(db, collectionName, docId);
  const time = new Date().getTime();

  const updateFormData = {
    title: formData.title,
    content: formData.content,
    rating: formData.rating,
    updateAt: time,
  };

  // 사진 파일을 변경했을 때
  if (formData.imgUrl !== null) {
    // 사진파일 업로드 및 업로드한 파일 경로 가져오기
    const uuid = crypto.randomUUID();
    const path = `movie/${uuid}`;
    const url = await uploadImage(path, formData.imgUrl);

    // 기존사진 삭제하기
    const storage = getStorage();
    try {
      const deleteRef = ref(storage, imgUrl);
      await deleteObject(deleteRef);
    } catch (error) {
      return null;
    }

    // 가져온 사진 경로 updateInfoObj의 imgUrl 에 셋팅하기
    updateFormData.imgUrl = url;
  }
  // 문서 필드 데이터 수정
  await updateDoc(docRef, updateFormData);
  const docData = await getDoc(docRef);
  const review = { docId: docData.id, ...doc.data() };
  return { review };
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
  updateDatas,
};
