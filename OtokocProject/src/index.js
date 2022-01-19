import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageRouter from './Pages/PageRouter';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals(); 
