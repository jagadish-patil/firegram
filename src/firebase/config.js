//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCx_yRjPmI7CWld87TiSjQ7I9BtjkHPjgQ",
    authDomain: "jp-firegram.firebaseapp.com",
    projectId: "jp-firegram",
    storageBucket: "jp-firegram.appspot.com",
    messagingSenderId: "67308421784",
    appId: "1:67308421784:web:fa876dedf01cd8b89bc6ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };