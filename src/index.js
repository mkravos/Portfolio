import React from 'react';
import ReactDOM from 'react-dom/client';
import HttpsRedirect from 'react-https-redirect';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HttpsRedirect>
    <App />
  </HttpsRedirect>
);
