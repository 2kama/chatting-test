import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

// Initalize and export Firebase.
const config = {
    apiKey: "AIzaSyA5XKwWgBS9CK-Looxv6OquTB5ZmGRfpuI",
    authDomain: "chattin-d636e.firebaseapp.com",
    projectId: "chattin-d636e",
    storageBucket: "chattin-d636e.appspot.com",
    messagingSenderId: "998225057858",
    appId: "1:998225057858:web:ba97457f750ac6912175db"
};

firebase.initializeApp(config)

// const settings = {timestampsInSnapshots: true};

// firebase.firestore().settings(settings)

export default firebase