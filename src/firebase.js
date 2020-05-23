/* eslint-disable no-undef */
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_TODOIST_APIKEY,
  authDomain: process.env.REACT_APP_TODOIST_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_TODOIST_DBURL,
  projectId: process.env.REACT_APP_TODOIST_PROJECTID,
  storageBucket: process.env.REACT_APP_TODOIST_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_TODOIST_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_TODOIST_APPID,
});

export { firebaseConfig as firebase };
