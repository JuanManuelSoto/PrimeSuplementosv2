import "./ProductPage.css";
import { productsList } from "../../Components/Products/Products";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const { itemid } = useParams();
  const [loading, setLoading] = useState(false);
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
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const loader = <div className="loader"></div>;

  useEffect(() => {
    productsList
      .filter((Item) => Item.id === itemid)
      .map((Item) => setData(Item));
  }, [itemid]);

  const name = data.name;
  const price = data.price;
  const id = data.id;
  const quantity = count;

  return (
    <div className="SuplementosPage-background">
      {!loading && loader}
      {loading && (
        <div className="SuplementosPage-content">
          <div className="SuplementosPage-C1"></div>
          <div className="ProductPage-C2">
            <div className="Item-background" key={itemid}>
              <p className="Item-Txt-1">Category: {data.category}</p>
              <p className="Item-Txt-2">Product: {data.name}</p>
              <img className="Item-Img-1" alt="" src={data.img} />
              <p className="Item-Txt-3">
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                }).format(data.price)}
              </p>
              <p className="Item-Txt-4">Available Stock: {data.stock}</p>
              <div className="Item-B1">
                <button className="Item-btn-1" onClick={() => Delete()}>
                  -
                </button>
                <p className="Item-Txt-5">{count}</p>
                <button className="Item-btn-2" onClick={() => Add()}>
                  +
                </button>
              </div>
              <button
                className="Item-btn"
                onClick={() => addToCart(name, price, id, quantity)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
