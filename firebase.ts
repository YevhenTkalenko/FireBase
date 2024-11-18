
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDg8XaCYTGRZrR2YNRZGuB0QXbQTOhpTo4",
    authDomain: "fir-auth-39f6b.firebaseapp.com",
    projectId: "fir-auth-39f6b",
    storageBucket: "fir-auth-39f6b.firebasestorage.app",
    messagingSenderId: "962310835337",
    appId: "1:962310835337:web:09bba521b58d2a2f540a58"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)