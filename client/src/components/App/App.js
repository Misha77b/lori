import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>App</div>
    </BrowserRouter>
  )
}

export default App