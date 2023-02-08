import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';

const App = () => {
  return (
    <BrowserRouter>

      <Header />
      <div className="App"> App </div>
      
    </BrowserRouter>
  );
}

export default App;
