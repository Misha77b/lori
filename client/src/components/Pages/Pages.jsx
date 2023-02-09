import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import Home from '../Home/Home';
import TestFileAnotherPage from '../TestFileAnotherPage';

const Pages = () => {
  return (
    <Routes>

      <Route path='/' element={ <Home /> } />

      {/* example route */}
      <Route path='another-page' element={ <TestFileAnotherPage /> } />

    </Routes>
  )
}

export default Pages