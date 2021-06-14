import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDRqGFm1kwd6WZdipzo6ZkEvENMrKcmXOo",
    authDomain: "portfolio-5be74.firebaseapp.com",
    projectId: "portfolio-5be74",
    storageBucket: "portfolio-5be74.appspot.com",
    messagingSenderId: "217192484946",
    appId: "1:217192484946:web:d00f11538907f827634f8b"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;