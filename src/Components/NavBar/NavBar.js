import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="NavBar-background">
      <div className="NavBar-B1"> PrimeSuplementos</div>
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
