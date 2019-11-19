import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDnc3W3Ki-yxQ_rfHg_6uyp57tOltKbMUA",
    authDomain: "shirtapp-19633.firebaseapp.com",
    databaseURL: "https://shirtapp-19633.firebaseio.com",
    projectId: "shirtapp-19633",
    storageBucket: "shirtapp-19633.appspot.com",
    messagingSenderId: "666621672360",
    appId: "1:666621672360:web:aaf677a1506d8f325ffb9d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const storage = firebase.storage();
  const firebaseAppAuth = firebase.auth();

  export {
      storage,
      firebaseAppAuth,
      firebase as default
  }