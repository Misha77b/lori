import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Pages from "../Pages/Pages";

function App() {
  return (
    <BrowserRouter>

      <Header />
      <Pages />
      <Footer />

    </BrowserRouter>
  );
}

export default App;
