import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { JournalApp } from './JournalApp';
import './styles.css';
import { Provider } from 'react-redux';
import { storeValue } from './store/store';

/*
 Provaider es un componente de react-redux que permite que todos los componentes hijos tengan acceso al store de redux
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={
      /* 
      store es el store de Redux que se importa de store.js
      */
      storeValue
    }> 
    <BrowserRouter> 
    
      <JournalApp />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
