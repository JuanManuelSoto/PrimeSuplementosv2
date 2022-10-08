import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/Pages/HomePage/HomePage";
import SuplementosPage from "../src/Pages/SuplementosPage/SuplementosPage";
import MerchandisingPage from "../src/Pages/MerchandisingPage/MerchandisingPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/suplementos" element={<SuplementosPage />} />
        <Route exact path="/merchandising" element={<MerchandisingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
