import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import NavBar from './components/NavBar';

createRoot(document.getElementById('container')).render(
    <BrowserRouter>
      <NavBar />
      <Main />
    </BrowserRouter>
  );