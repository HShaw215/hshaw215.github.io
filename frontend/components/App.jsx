import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../stylesheet/styles.css'
import Page from './Page';

const App = () => {
    return (
        <>
        <Routes>
           <Route path='/' element={<Page />} />
        </Routes>
      
        </>
    )
}

export default App