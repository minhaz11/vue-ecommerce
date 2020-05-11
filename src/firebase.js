
import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBziBj9HiEUuusSqsWQiQt4YqMGY4IfgOk",
    authDomain: "vue-shop-a3916.firebaseapp.com",
    databaseURL: "https://vue-shop-a3916.firebaseio.com",
    projectId: "vue-shop-a3916",
    storageBucket: "vue-shop-a3916.appspot.com",
    messagingSenderId: "509068893416",
    appId: "1:509068893416:web:a31278d7446c8a811ffd5d"
  };
  // Initialize Firebase
 export const fb =  firebase.initializeApp(firebaseConfig);