import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './frontend/components/App.jsx';

createRoot(document.getElementById('container')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );