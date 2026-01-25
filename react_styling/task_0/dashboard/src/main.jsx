import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './main.css';

// Roboto fontunun çəkilərini import edirik
import '@fontsource/roboto/400.css'; // Normal body text
import '@fontsource/roboto/500.css'; // Medium (semi-emphasized)
import '@fontsource/roboto/700.css'; // Bold (headings)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);