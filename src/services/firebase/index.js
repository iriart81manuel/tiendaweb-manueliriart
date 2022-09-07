import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCkuu9ceE1VE-SzVzTjk8Q4bHEVAL3Q2iE",
  authDomain: "tienda-online-perifericos.firebaseapp.com",
  projectId: "tienda-online-perifericos",
  storageBucket: "tienda-online-perifericos.appspot.com",
  messagingSenderId: "430608665028",
  appId: "1:430608665028:web:2def48c915a1faec297c91"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)