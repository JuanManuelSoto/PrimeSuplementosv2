import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import Cart from "../Cart/Cart";

const NavBar = () => {
  const { opencart, setOpencart } = useContext(CartContext);

  return (
    <div className="NavBar-background">
      {opencart && <Cart />}
      <Link to={"/"} className="NavBar-B1">
        PrimeSuplementos
      </Link>
      <div className="NavBar-B2">
        <div className="NavBar-B2B1">
          <Link to={"/suplementos"} className="NavBar-B2B1B1">
            SUPLEMENTOS
          </Link>
          <Link to={"/merchandising"} className="NavBar-B2B1B2">
            MERCHANDISING
          </Link>
        </div>
      </div>
      <div className="NavBar-B3">
        <div className="NavBar-B3B1" onClick={() => setOpencart(true)}>
          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
