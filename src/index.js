import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import AppProvider from './context/AppProvider';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename={ window.location.pathname || '' }>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
