import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './frontend/components/Main.jsx'
import NavBar from './frontend/components/NavBar.jsx';

createRoot(document.getElementById('container')).render(
    <BrowserRouter>
      <NavBar />
      <Main />
    </BrowserRouter>
  );