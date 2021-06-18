import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBsaTwsVHAQ7fSS9DdwD5Ab7ooaaPecsaA",
  authDomain: "nykaa-development.firebaseapp.com",
  projectId: "nykaa-development",
  storageBucket: "nykaa-development.appspot.com",
  messagingSenderId: "581343408470",
  appId:"dee7b9b8af688424b266f7",
});
export const auth = app.auth();
export default app;
