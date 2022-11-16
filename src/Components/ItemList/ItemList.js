import "./ItemList.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const ItemList = () => {
  const { FinalData } = useContext(CartContext);
  return (
    <div className="ItemList-background">
      {FinalData.map((Item) => {
        return (
          <Link
            to={`/item/${Item.id}`}
            className="ItemList-Item-background"
            key={Item.id}
          >
            <img src={Item.image} className="ItemList-Item-img" alt="" />
            <p className="ItemList-Item-txt-1">{Item.name}</p>
            <p className="ItemList-Item-txt-2">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(Item.price)}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ItemList;
