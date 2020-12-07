import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';

const config = {
     apiKey: "AIzaSyAVHr0QGm6HIQR_3luB2txVexV6Z2cP1XA",
     authDomain: "asd-developer-emails.firebaseapp.com",
     databaseURL: "https://asd-developer-emails.firebaseio.com",
     projectId: "asd-developer-emails",
     storageBucket: "asd-developer-emails.appspot.com",
     messagingSenderId: "899767666920",
     appId: "1:899767666920:web:26d4f060466eecf9caa15d",
     measurementId: "G-X4J6LHN3HV"
   };
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();
}

firebase.initializeApp(config);

export const app = firebase.app();
export const auth = firebase.auth();
export const functions = firebase.functions();