// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , setPersistence, browserSessionPersistence} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
 apiKey: "AIzaSyDQtt-1VYDmMVGcjtcp38BL5HSQx1d1iTo",
  authDomain: "guddus-dryfruits-89863.firebaseapp.com",
  projectId: "guddus-dryfruits-89863",
  storageBucket: "guddus-dryfruits-89863.appspot.com",
  messagingSenderId: "584165047829",
  appId: "1:584165047829:web:34696bc939d2ecb9d6981c",
  measurementId: "G-PVBFC6G64W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) ;
const database=getFirestore(app);
 const auth=getAuth(app)
 const storageInstance =getStorage(app);
 setPersistence(auth,browserSessionPersistence)

 export {database, auth,storageInstance }