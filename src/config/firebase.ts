import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDb63OJfDhJxTGtQOqUkO_ZpFHkzk4DEwc",
    authDomain: "new1-4582c.firebaseapp.com",
    databaseURL: "https://new1-4582c.firebaseio.com",
    projectId: "new1-4582c",
    storageBucket: "new1-4582c.appspot.com",
    messagingSenderId: "209592573377",
    appId: "1:209592573377:web:5820f18ae67edabecfa340",
    measurementId: "G-3S3LPQ6QNP"
});
export default firebaseApp;
export const db = firebase.firestore();

