// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDf_V5-1ld0rMljH5CbGUfHSM_zc3yDx2U",
    authDomain: "my-portfolio-7ee10.firebaseapp.com",
    projectId: "my-portfolio-7ee10",
    storageBucket: "my-portfolio-7ee10.appspot.com",
    messagingSenderId: "964894515423",
    appId: "1:964894515423:web:a878bf9857f0f346bb896a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();