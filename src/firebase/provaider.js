// provider de autenticacion de google

import{
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { firebseAuth } from './config';

const googleProvaider= new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebseAuth, googleProvaider);
        const user = result.user;
        console.log(user);
        const {displayName, email, photoURL,uid} = user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
    }
}
}