import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAD62Dkxi18jqLRHO7IbufrJdY-SbI8jPw",
    authDomain: "twitter-clone-56783.firebaseapp.com",
    databaseURL: "https://twitter-clone-56783.firebaseio.com",
    projectId: "twitter-clone-56783",
    storageBucket: "twitter-clone-56783.appspot.com",
    messagingSenderId: "496682645018",
    appId: "1:496682645018:web:cfc4238a0ca254594683a3",
    measurementId: "G-407M5YH09R"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;