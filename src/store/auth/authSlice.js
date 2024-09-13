import  {createSlice} from '@reduxjs/toolkit';

// Se crea un slice con el nombre de authSlice

// Este slice se encarga de manejar el estado de la autenticación del usuario

export const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        status: 'not-authenticate', // 'checking', 'not-authenticated', 'authenticated'
        uid: null,
        email : null,
        displayName: null,
        photoUrl: null,
        errorMessage: null

    },
    reducers: {
        // Se crean las acciones que se pueden ejecutar en el slice
        login: (state, payload) => {
            state.status='authenticated',  // checking, authenticated, not-authenticated
            state.uid=payload.uid,
            state.email=payload.email,
            state.displayName=payload.displayName,
            state.photoUrl=payload.photoUrl,
            state.errorMessage=null

        },
        logout: (state,payload) => {
            // valores por defecto
            state.status='not-authenticated',  // checking, authenticated, not-authenticated
            state.uid=null,
            state.email=null,
            state.displayName=null,
            state.photoUrl=null,
            state.errorMessage=payload.errorMessage
            
            

        
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions; // esto es lo que se exporta para ser utilizado en otros componentes