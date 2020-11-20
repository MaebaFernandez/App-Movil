import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDqHcHpqBYoir67qS8FkG6_pm6854zgAME",
    authDomain: "app-movil-shopping.firebaseapp.com",
    databaseURL: "https://app-movil-shopping.firebaseio.com",
    projectId: "app-movil-shopping",
    storageBucket: "app-movil-shopping.appspot.com",
    messagingSenderId: "1040336021130",
    appId: "1:1040336021130:web:43896d05efaba2c750af73"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);