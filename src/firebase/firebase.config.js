// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqK6f2YyQ8FX7NowrL7PYaYfuMWo10nAo",
  authDomain: "electronic-toy-world-firebase.firebaseapp.com",
  projectId: "electronic-toy-world-firebase",
  storageBucket: "electronic-toy-world-firebase.appspot.com",
  messagingSenderId: "891886510159",
  appId: "1:891886510159:web:7ba5fcfaba7dbcaf3a4a3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;