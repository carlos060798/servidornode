//  los  thunks son funciones que se encargan de manejar la lógica asíncrona de la aplicación

import { checkingCredentials } from "./authSlice";
import { signInWithGoogle } from "../../firebase/provaider";
import { logout,login} from "./authSlice";

//  en este caso se encargan de manejar la autenticación del usuario


export const checkingAthentication = (email,password) => {
    return async (dispatch) => {
        // Aquí se puede hacer una petición a un endpoint para verificar si el usuario está autenticado
        // Si el usuario está autenticado se puede hacer un dispatch de la acción login
        // Si el usuario no está autenticado se puede hacer un dispatch de la acción logout

        dispatch(checkingCredentials()); 
        
    }
}

//  en este caso se encargan de manejar la autenticación del usuario con google

export const startgoogleSinging = () => {
    return async (dispatch) => {
        // Aquí se puede hacer una petición a un endpoint para verificar si el usuario está autenticado
        // Si el usuario está autenticado se puede hacer un dispatch de la acción login
        // Si el usuario no está autenticado se puede hacer un dispatch de la acción logout

        dispatch(checkingCredentials()); 
        const result =await signInWithGoogle(); // se llama a la función que se encarga de la autenticación con google
        console.log(result);
        if(!result.ok) return dispatch(logout(result.errorMessage)); 

        dispatch(login(result));

        
    }
}