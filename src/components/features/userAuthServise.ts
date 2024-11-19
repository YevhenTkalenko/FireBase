import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import React, { SetStateAction } from "react";


export const createUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password).then((data) =>
        console.log(data)
    );
}

export const singInUser = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password).then((data) =>
        console.log(data)
    );
}

export const logOutUser = () => {
    signOut(auth).then((data) => console.log(data));
}

export const isUserChangeState = (setUserAuth: React.Dispatch<SetStateAction<any>>) => {
    onAuthStateChanged(auth, (user) => {
        user ? setUserAuth(user) : setUserAuth(null);
    });
}

export const timerForCreateUser = (setIsSuccess: React.Dispatch<SetStateAction<boolean>>) => {
    setTimeout(() => {
        setIsSuccess(false);
    }, 1000);
}