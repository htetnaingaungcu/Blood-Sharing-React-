import firebase from 'firebase';
  
const config = {
  apiKey: "AIzaSyB7DIEZOsgZ2WR4jBYguieVAM_vFw6JjHc",
  authDomain: "bloodsharing-c70df.firebaseapp.com",
  databaseURL: "https://bloodsharing-c70df.firebaseio.com",
  projectId: "bloodsharing-c70df",
  storageBucket: "bloodsharing-c70df.appspot.com",
  messagingSenderId: "416770223103",
  appId: "1:416770223103:web:951107e8c5201ff9"
};

export default firebase.initializeApp(config);