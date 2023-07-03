import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_9Zn3EIh_j5OgAlD670saVRkdiyDCWIE",
    authDomain: "line-clone-study.firebaseapp.com",
    projectId: "line-clone-study",
    storageBucket: "line-clone-study.appspot.com",
    messagingSenderId: "952974271222",
    appId: "1:952974271222:web:8c4e167721384bc9cf42d7"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };