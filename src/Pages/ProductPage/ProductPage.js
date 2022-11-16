import "./ProductPage.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const { itemid } = useParams();
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);
  const Add = () => {
    setCount(count + 1);
  };
  const Delete = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", itemid);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [itemid]);

  const name = data.name;
  const price = data.price;
  const id = data.id;
  const quantity = count;
  const img = data.image;
  const stock = data.stock;

  return (
    <div className="SuplementosPage-background">
      <div></div>
      <div className="SuplementosPage-content">
        <img src={img} className="SuplementosPage-img" alt="" />
        <p className="SuplementosPage-txt-1">{name}</p>
        <p className="SuplementosPage-txt-2">Available stock: {stock}</p>
        <div className="SuplementosPage-C-B1">
          <div className="SuplementosPage-C-B1B1" onClick={() => Delete()}>
            -
          </div>
          <div className="SuplementosPage-C-B1B2">{count}</div>
          <div className="SuplementosPage-C-B1B1" onClick={() => Add()}>
            +
          </div>
        </div>
        <button
          className="SuplementosPage-btn"
          onClick={() => addToCart(name, price, id, quantity, img)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
