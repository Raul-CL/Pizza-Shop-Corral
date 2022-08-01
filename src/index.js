import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjlRPI1Iatsx7wO1rj7GR5XoAj7uGiv-U",
  authDomain: "coderhouse-ecommerce-91a14.firebaseapp.com",
  projectId: "coderhouse-ecommerce-91a14",
  storageBucket: "coderhouse-ecommerce-91a14.appspot.com",
  messagingSenderId: "952577242004",
  appId: "1:952577242004:web:787b9a0b2006b2993b5581"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
export const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App />
);
