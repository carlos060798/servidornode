import  {createSlice} from '@reduxjs/toolkit';

// Se crea un slice con el nombre de authSlice

// Este slice se encarga de manejar el estado de la autenticación del usuario

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',  // checking, authenticated, not-authenticated
        uid: null,
        email : null,
        displayName: null,
        photoUrl: null,

    },
    reducers: {
        login: (state, action) => {
        },
        logout: (state,payload) => {
        
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions; // esto es lo que se exporta para ser utilizado en otros componentes