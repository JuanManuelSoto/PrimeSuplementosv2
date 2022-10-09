import "./MerchandisingPage.css";
import { productsList } from "../../Components/Products/Products";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MerchandisingPage = () => {
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
          <div className="SuplementosPage-C2">
            {productsList
              .filter((Item) => Item.category === "Merchandising")
              .map((Item) => {
                return (
                  <Link
                    to={`/item/${Item.id}`}
                    className="ItemList-Item-background"
                    key={Item.id}
                  >
                    <img src={Item.img} className="ItemList-Item-img" alt="" />
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
        </div>
      )}
    </div>
  );
};

export default MerchandisingPage;
