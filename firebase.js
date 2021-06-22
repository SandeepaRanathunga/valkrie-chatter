import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBeDAKouPNHxzF7diGQlCXNWdOHxKXf0FI',
  authDomain: 'valkrie-chatter.firebaseapp.com',
  projectId: 'valkrie-chatter',
  storageBucket: 'valkrie-chatter.appspot.com',
  messagingSenderId: '961634854629',
  appId: '1:961634854629:web:87cb04b9c23bf156f6960c',
};

let app;
//prevent continious initiation
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const database = app.firestore();
const auth = firebase.auth();

export { database, auth };
