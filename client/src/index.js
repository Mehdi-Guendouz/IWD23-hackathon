import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { DataLayer } from "./contexte/dataLayar";
import { reducer, initialState } from "./contexte/reducer";
import { DoctorsContextProvider } from './context/DoctorsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <DataLayer initialState={initialState} reducer={reducer}>
        <DoctorsContextProvider>
          <App />
        </DoctorsContextProvider>
    </DataLayer>
    </React.StrictMode>

);


