import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA4O7dPkGlxQ7--eq84b0TTolNP6xLnBV0",
  authDomain: "todoist-clone-91831.firebaseapp.com",
  databaseURL: "https://todoist-clone-91831.firebaseio.com",
  projectId: "todoist-clone-91831",
  storageBucket: "todoist-clone-91831.appspot.com",
  messagingSenderId: "212688760177",
  appId: "1:212688760177:web:0d47001aad025c97911ad0",
});

export { firebaseConfig as firebase };
