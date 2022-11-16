import "./SectionPage.css";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";

const SectionPage = () => {
  const { setParamPath1 } = useContext(CartContext);
  const { Path1 } = useParams();

  useEffect(() => {
    setParamPath1(Path1);
  }, [Path1, setParamPath1]);

  return (
    <div className="SectionPage-background">
      <ItemList />
    </div>
  );
};

export default SectionPage;
