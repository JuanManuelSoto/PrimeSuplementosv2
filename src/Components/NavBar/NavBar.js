import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar-background">
      <Link to={"/"} className="NavBar-B1">
        PrimeSuplementos
      </Link>
      <div className="NavBar-B2">
        <div className="NavBar-B2B1">
          <button className="NavBar-B2B1B1">SUPLEMENTOS</button>
          <button className="NavBar-B2B1B2">MERCHANDISING</button>
        </div>
      </div>
      <div className="NavBar-B3">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
