import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { DataLayer } from "./contexte/dataLayar";
import { reducer, initialState } from "./contexte/reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataLayer>
);


