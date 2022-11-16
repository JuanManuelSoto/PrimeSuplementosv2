import "./HomePage.css";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";
import { CartContext } from "../../Context/CartContext";
import { useContext, useEffect } from "react";

const HomePage = () => {
  const { setParamPath1 } = useContext(CartContext);

  useEffect(() => {
    setParamPath1("Home");
  }, [setParamPath1]);

  return (
    <div className="HomePage-background">
      <ItemListContainer />
    </div>
  );
};

export default HomePage;
