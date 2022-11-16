import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/Pages/HomePage/HomePage";
import ProductPage from "../src/Pages/ProductPage/ProductPage";
import SectionPage from "./Pages/SectionPage/SectionPage";
import CartProvider from "./Context/CartContext";
import { Loader } from "./Components/Loader/Loader";
import "./Firebase/config";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Loader />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/item/:itemid" element={<ProductPage />} />
          <Route path="/section/:Path1" element={<SectionPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
