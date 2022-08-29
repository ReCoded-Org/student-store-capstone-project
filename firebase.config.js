/* eslint-disable unused-imports/no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0zI86ZYBP-xrPj5jiydZw4bKuEPx-vXU",
    authDomain: "student-store-7cf9c.firebaseapp.com",
    projectId: "student-store-7cf9c",
    storageBucket: "student-store-7cf9c.appspot.com",
    messagingSenderId: "604088151357",
    appId: "1:604088151357:web:54360215fa3b0cc4fb6954",
    measurementId: "G-6RJH6GQHKG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
