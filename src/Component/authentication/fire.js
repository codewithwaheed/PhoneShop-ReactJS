import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAlK04zg7gBSmkOJrqhAZQUzrPsFiVxeMg",
  authDomain: "my-web-project-9be15.firebaseapp.com",
  databaseURL: "https://my-web-project-9be15.firebaseio.com",
  projectId: "my-web-project-9be15",
  storageBucket: "my-web-project-9be15.appspot.com",
  messagingSenderId: "523499781430",
  appId: "1:523499781430:web:199ce6562c3d1a40f98797",
  measurementId: "G-MG6E743MPG"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
