import "./ProductPage.css";
import { productsList } from "../../Components/Products/Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { itemid } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  const loader = <div className="loader"></div>;

  return (
    <div className="SuplementosPage-background">
      {!loading && loader}
      {loading && (
        <div className="SuplementosPage-content">
          <div className="SuplementosPage-C1"></div>
          <div className="ProductPage-C2">
            {productsList
              .filter((Item) => Item.id === itemid)
              .map((Item) => (
                <div className="Item-background">
                  <p className="Item-Txt-1">Category: {Item.category}</p>
                  <p className="Item-Txt-2">Product: {Item.name}</p>
                  <img className="Item-Img-1" alt="" src={Item.img} />
                  <p className="Item-Txt-3">
                    {new Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    }).format(Item.price)}
                  </p>
                  <p className="Item-Txt-4">Available Stock: {Item.stock}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
