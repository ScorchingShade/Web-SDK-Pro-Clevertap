import firebase from 'firebase'
import 'firebase/messaging';
const messaging = firebase.messaging();
var firebaseConfig = {
    apiKey: "AIzaSyCK4ld-1zJSC3XOExzFu7RxIzYXkmaxxRg",
    authDomain: "web-sdk-clevertap.firebaseapp.com",
    projectId: "web-sdk-clevertap",
    storageBucket: "web-sdk-clevertap.appspot.com",
    messagingSenderId: "1099018429547",
    appId: "1:1099018429547:web:e043ebcbc20a244561bd2e",
    measurementId: "G-7V0ZXTYQY4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;
