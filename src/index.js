import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import state from './state/state.js';

export const root = ReactDOM.createRoot(document.getElementById('root'));
const renderDom = () =>{
   root.render(<App state ={state} />);
}
renderDom();
state.subscribe(renderDom);

reportWebVitals();