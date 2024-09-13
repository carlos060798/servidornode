
import {configureStore} from '@reduxjs/toolkit';
import {authSlice} from './auth/authSlice';

/*
 para manejar los estados de la aplicación se utiliza Redux,
 con esto se provee la función configureStore que se encarga de crear el store de Redux en un 
  s
*/


export const   storeValue = configureStore({
  reducer: {
    // Aquí se pueden agregar todos los reducers que se necesiten
    // counter: counterReducer

    auth: authSlice.reducer,


  }
})