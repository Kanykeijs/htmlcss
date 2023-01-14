import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH9XtA3mQoCCs8VLs6JBd7jxOEDu725MM",
  authDomain: "project-x-2dd41.firebaseapp.com",
  projectId: "project-x-2dd41",
  storageBucket: "project-x-2dd41.appspot.com",
  messagingSenderId: "840857492066",
  appId: "1:840857492066:web:c911fd6a3e034560650f3b",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
