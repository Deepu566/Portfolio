// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoDLgywtiw_yAEAIpWyDV_vxqkTswEtkc",
    authDomain: "portfolio-27cf6.firebaseapp.com",
    projectId: "portfolio-27cf6",
    storageBucket: "portfolio-27cf6.appspot.com",
    messagingSenderId: "946341904605",
    appId: "1:946341904605:web:89d3f010a3a1dfc6321b34"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
// console.log(app)