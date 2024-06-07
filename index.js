// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const provider = new GoogleAuthProvider();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoaNA7pam9LO87XcF0Ye0P03Qsd6ZT-Ac",
  authDomain: "login-with-firebase-data-d0d10.firebaseapp.com",
  projectId: "login-with-firebase-data-d0d10",
  storageBucket: "login-with-firebase-data-d0d10.appspot.com",
  messagingSenderId: "754436313384",
  appId: "1:754436313384:web:3c39fcbce151793bbbc01d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Login function
window.login = function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Login Successful');
    })
    .catch((error) => {
      alert('Error: ' + error.message);
    });
}

// Register function
window.register = function register() {
  const fullName = document.getElementById('full_name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const favouriteSong = document.getElementById('favourite_song').value;
  const milkBeforeCereal = document.getElementById('milk_before_cereal').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return set(ref(database, 'users/' + user.uid), {
        fullName: fullName,
        email: email,
        favouriteSong: favouriteSong,
        milkBeforeCereal: milkBeforeCereal
      });
    })
    .then(() => {
      alert('User Registered Successfully');
    })
    .catch((error) => {
      alert('Error: ' + error.message);
    });
}
