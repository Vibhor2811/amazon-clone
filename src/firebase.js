// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVaqlWtgwXcgP3gukqaN_EOQCvhnaMHQI",
    authDomain: "clone-2f0c6.firebaseapp.com",
    databaseURL: "https://clone-2f0c6.firebaseio.com",
    projectId: "clone-2f0c6",
    storageBucket: "clone-2f0c6.appspot.com",
    messagingSenderId: "824136324722",
    appId: "1:824136324722:web:41dba5a38be138a186d4eb",
    measurementId: "G-6LNBR0N8FH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth();
 
export { db, auth };
