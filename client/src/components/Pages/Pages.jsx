import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import Home from '../Home/Home';

const Pages = () => {
  return (
    <Routes>

      <Route path='/' element={ <Home /> } />

    </Routes>
  )
}

export default Pages