import "./Loader.css";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

export const Loader = () => {
  const { loaded } = useContext(CartContext);
  return (
    <div className={loaded ? "NotDisplayed" : "Loader-background"}>
      <div></div>
      <div className="loader"></div>
    </div>
  );
};
