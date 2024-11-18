import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";


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