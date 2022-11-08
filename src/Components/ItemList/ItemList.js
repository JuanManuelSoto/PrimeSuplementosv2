import "./ItemList.css";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const ItemList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    getDocs(queryCollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  return (
    <div className="ItemList-background">
      {data.map((Item) => {
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
