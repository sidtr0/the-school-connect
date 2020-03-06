import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC6l1Htyhiw5-hALd51SJNKIfRCefaFgw4",
    authDomain: "the-school-connect.firebaseapp.com",
    databaseURL: "https://the-school-connect.firebaseio.com",
    projectId: "the-school-connect",
    storageBucket: "the-school-connect.appspot.com",
    messagingSenderId: "926697961879",
    appId: "1:926697961879:web:6ce075a8c1e886810c6cd2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// firebase collections
const postsCollection = db.collection('posts');

export {
  db,
  auth,
  currentUser,
  postsCollection
}
