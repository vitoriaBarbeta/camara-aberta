// Em src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Header from './components/header/header.tsx'; // Importe o Header aqui
import './index.css'; // CSS global

// Renderiza o Header no <div id="header-root">
const headerRoot = document.getElementById('header-root');
if (headerRoot) {
  ReactDOM.createRoot(headerRoot).render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  );
}

// Renderiza o resto da aplicação (App) no <div id="root">
const appRoot = document.getElementById('root');
if (appRoot) {
  ReactDOM.createRoot(appRoot).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
