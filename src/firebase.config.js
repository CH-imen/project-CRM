import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDlrAUY7bKysBNA5iUbaEEbzLExlm5PsuE",
  authDomain: "crm-marketing-a244f.firebaseapp.com",
  databaseURL: "https://crm-marketing-a244f-default-rtdb.firebaseio.com",
  projectId: "crm-marketing-a244f",
  storageBucket: "crm-marketing-a244f.appspot.com",
  messagingSenderId: "750767731609",
  appId: "1:750767731609:web:3942152e75d0fa629e5908"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
export const auth =getAuth(app);
export { app, db, storage };
