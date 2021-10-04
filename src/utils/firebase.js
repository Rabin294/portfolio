import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0qkL7_rhD-_SQEFAyEXJzD2azG3k2V-E",
  authDomain: "rob-blog-ce276.firebaseapp.com",
  projectId: "rob-blog-ce276",
  storageBucket: "rob-blog-ce276.appspot.com",
  messagingSenderId: "163914416762",
  appId: "1:163914416762:web:da248dcc71d742413bb1c3",
  measurementId: "G-PZXD53SRV6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
