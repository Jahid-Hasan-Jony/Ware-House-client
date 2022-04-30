// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeD2whcmvJuaoIEGJ4O40KrZNdOhKRIYE",
    authDomain: "warehouse-97cd9.firebaseapp.com",
    projectId: "warehouse-97cd9",
    storageBucket: "warehouse-97cd9.appspot.com",
    messagingSenderId: "43404102953",
    appId: "1:43404102953:web:6d751a33739e546b487b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)

export default Auth