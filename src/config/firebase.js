import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6Whx0iay5TUp9roRR29-N6R9z5upwf6Y",
  authDomain: "revents-26a6a.firebaseapp.com",
  databaseURL: "https://revents-26a6a.firebaseio.com",
  projectId: "revents-26a6a",
  storageBucket: "revents-26a6a.appspot.com",
  messagingSenderId: "751667476376"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
