import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/Pages/HomePage/HomePage";
import SuplementosPage from "../src/Pages/SuplementosPage/SuplementosPage";
import MerchandisingPage from "../src/Pages/MerchandisingPage/MerchandisingPage";
import ProductPage from "../src/Pages/ProductPage/ProductPage";
import CartProvider from "./Context/CartContext";
import "./Firebase/config";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/suplementos" element={<SuplementosPage />} />
          <Route exact path="/merchandising" element={<MerchandisingPage />} />
          <Route exact path="/item/:itemid" element={<ProductPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
