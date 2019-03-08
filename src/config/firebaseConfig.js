import firebase from 'firebase/app';
 
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBXDE9O3MxfxlHUSDe-22cSEqexapAR3pw",
    authDomain: "alietch-crm.firebaseapp.com",
    databaseURL: "https://alietch-crm.firebaseio.com",
    projectId: "alietch-crm",
    storageBucket: "alietch-crm.appspot.com",
    messagingSenderId: "486948134862"
};
firebase.initializeApp(config);
firebase.firestore();


export default firebase;