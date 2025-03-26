import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';  // Import the App component
import './styles.css';    // Import the global styles (if any)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
