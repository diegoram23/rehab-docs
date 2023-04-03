import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDjzC-NsOGgF4V08l63NoHQZuSrWpwdDoY",
    authDomain: "rehab-docs-678cb.firebaseapp.com",
    projectId: "rehab-docs-678cb",
    storageBucket: "rehab-docs-678cb.appspot.com",
    messagingSenderId: "354262925954",
    appId: "1:354262925954:web:3e3c21745f897a38922a9b"
};

//init firebase
initializeApp(firebaseConfig)

//init firestore
const db = getFirestore()

export { db }