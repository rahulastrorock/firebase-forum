import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwDLS6l2rR-Hge5ZrhvR4OX5w3vS5Ropk",
  authDomain: "react-blogs-app-b2089.firebaseapp.com",
  projectId: "react-blogs-app-b2089",
  storageBucket: "react-blogs-app-b2089.appspot.com",
  messagingSenderId: "475441609446",
  appId: "1:475441609446:web:49902833fdfb217b7a9927",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
