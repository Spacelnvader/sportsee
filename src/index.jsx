import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";



/**
 * @file root folder of the application
 * @author Nicolas Chaussadas
 * @see <a href=""> https://github.com/Spacelnvader/sportsee </a>
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,

);
reportWebVitals();