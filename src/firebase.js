import firebase from "firebase";
import "firebase/firestore";
import store from "./store/index.js";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

auth.onAuthStateChanged(user => {
  store.commit("updateUser", { user });
});

// firebase collections
const postsCollection = db.collection("posts");

export { db, auth, currentUser, postsCollection };
