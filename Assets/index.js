import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Optional: for global styles

// Create a root element for React to render into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
