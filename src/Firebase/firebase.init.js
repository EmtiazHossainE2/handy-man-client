// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBukkvku7uh_vVvfIEb8b8xS5GLABh5RVE",
    authDomain: "handyman-e2fe9.firebaseapp.com",
    projectId: "handyman-e2fe9",
    storageBucket: "handyman-e2fe9.appspot.com",
    messagingSenderId: "748722387747",
    appId: "1:748722387747:web:ab6b291e7863523301aa96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;