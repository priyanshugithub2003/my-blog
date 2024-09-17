// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional CSS file for global styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Optional for performance tracking

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Connects to the 'root' div in public/index.html
);

// Optional: To track performance
reportWebVitals();