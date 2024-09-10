//  los  thunks son funciones que se encargan de manejar la lógica asíncrona de la aplicación

import { checkingCredentials } from "./authSlice";

//  en este caso se encargan de manejar la autenticación del usuario


export const checkingAthentication = (email,password) => {
    return async (dispatch) => {
        // Aquí se puede hacer una petición a un endpoint para verificar si el usuario está autenticado
        // Si el usuario está autenticado se puede hacer un dispatch de la acción login
        // Si el usuario no está autenticado se puede hacer un dispatch de la acción logout

        dispatch(checkingCredentials()); 
        
    }
}