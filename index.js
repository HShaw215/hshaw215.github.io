import React from 'react';
import { createRoot } from 'react-dom/client';
import { ReactDOM } from 'react-dom/client';
import Main from './frontend/components/Main.jsx'
import NavBar from './frontend/components/NavBar.jsx';

const domNode = document.getElementById('container')
const root = createRoot(domNode)
root.render(
  <div>
    <NavBar />
    <Main />
  </div>
)
    