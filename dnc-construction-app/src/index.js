import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component

// This is where your React app gets "mounted" into the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
