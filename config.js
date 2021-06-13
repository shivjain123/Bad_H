import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBGnW15Irl3_HtEP8AWFI8iYI9If1KE7b0",
    authDomain: "badhabitsgone-d6191.firebaseapp.com",
    projectId: "badhabitsgone-d6191",
    storageBucket: "badhabitsgone-d6191.appspot.com",
    messagingSenderId: "39942300305",
    appId: "1:39942300305:web:7c1fa24e914fbf0df49530"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();