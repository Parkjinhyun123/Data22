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
  where,
  arrayUnion,
  arrayRemove,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyARawYxbOyLKnEWMlPSatqIULiZhn5ZDN0",
  authDomain: "hospetal-f595a.firebaseapp.com",
  projectId: "hospetal-f595a",
  storageBucket: "hospetal-f595a.appspot.com",
  messagingSenderId: "41843789723",
  appId: "1:41843789723:web:07d3d1aaf16f0bd24b9b3e",
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

async function getData(collectionName, fieldName, condition, value) {
  const docQuery = query(
    collection(db, collectionName),
    where(fieldName, condition, value)
  );

  const querySnapshot = await getDocs(docQuery);
  const data = querySnapshot.docs.map((doc) => ({
    docId: doc.id,
    ...doc.data(),
  }));

  return data.length === 1 ? data[0] : data;
}

export const getLastId = async () => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "member"), orderBy("id", "desc"), limit(1))
    );
    const lastDoc = querySnapshot.docs[0];

    return lastDoc.data().id;
  } catch (error) {
    console.error("Error in getLastId:", error);
    throw error;
  }
};

const addDatas = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

async function idDatas(collectionName, checkId) {
  const Snapshot = await getDocs(
    query(collection(db, collectionName), where("memberId", "==", checkId))
  );
  return Snapshot.size;
}

async function nickDatas(collectionName, nickName) {
  const Snapshot = await getDocs(
    query(
      collection(db, collectionName),
      where("memberNickName", "==", nickName)
    )
  );
  return Snapshot.size;
}

async function getMember(values) {
  const { id, password } = values;
  const docQuery = query(collection(db, "member"), where("memberId", "==", id));
  let message;
  let memberObj = {};

  const querySnapshot = await getDocs(docQuery);
  if (querySnapshot.docs.length !== 0) {
    const memberData = querySnapshot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }))[0];
    if (memberData.password == password) {
      memberObj = memberData;
    } else {
      message = "비밀번호가 일치하지 않습니다.";
    }
  } else {
    message = "일치하는 아이디가 없습니다.";
  }
  return { memberObj, message };
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

async function updateDatas(collectionName, docId, upadateData, options) {
  const docRef = doc(db, collectionName, docId);
  try {
    if (options) {
      if (options.type == "ADD") {
        await updateDoc(docRef, {
          [options.fieldName]: arrayUnion(upadateData),
        });
      } else if (options.type === "DELETE") {
        await updateDoc(docRef, {
          [options.fieldName]: arrayRemove(upadateData),
        });
      }
    } else {
      await updateDoc(docRef, upadateData);
    }
    return true;
  } catch (error) {
    return false;
  }
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
  getMember,
  getData,
  idDatas,
  nickDatas,
};
