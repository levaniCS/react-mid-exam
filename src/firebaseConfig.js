import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBvBmGOZ8f9EXBObduyKxXtPY1DeVmoblk",
  authDomain: "react-final-exam-b2bdb.firebaseapp.com",
  databaseURL: "https://react-final-exam-b2bdb-default-rtdb.firebaseio.com",
  projectId: "react-final-exam-b2bdb",
  storageBucket: "react-final-exam-b2bdb.appspot.com",
  messagingSenderId: "648998487538",
  appId: "1:648998487538:web:d50f93dec4276c803dd76b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;