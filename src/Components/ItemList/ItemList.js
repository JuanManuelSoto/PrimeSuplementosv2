import { productsList } from "../Products/Products";
import "./ItemList.css";

const ItemList = () => {
  return (
    <div className="ItemList-background">
      {productsList.map((Item) => {
        return (
          <div className="ItemList-Item-background" key={Item.id}>
            <img src={Item.img} className="ItemList-Item-img" alt="" />
            <p className="ItemList-Item-txt-1">{Item.name}</p>
            <p className="ItemList-Item-txt-2">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(Item.price)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
