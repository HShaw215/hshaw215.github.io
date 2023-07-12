import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './frontend/components/App.jsx';

render (
  <App />,
  document.getElementById('container')
  )