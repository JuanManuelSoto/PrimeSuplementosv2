import "./MerchandisingPage.css";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MerchandisingPage = () => {
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

  const loader = <div className="loader"></div>;

  return (
    <div className="SuplementosPage-background">
      {data.length > 0 ? (
        <div className="SuplementosPage-content">
          <div className="SuplementosPage-C1"></div>
          <div className="SuplementosPage-C2">
            {data
              .filter((Item) => Item.category === "Merchandising")
              .map((Item) => {
                return (
                  <Link
                    to={`/item/${Item.id}`}
                    className="ItemList-Item-background"
                    key={Item.id}
                  >
                    <img
                      src={Item.image}
                      className="ItemList-Item-img"
                      alt=""
                    />
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
      ) : (
        loader
      )}
    </div>
  );
};

export default MerchandisingPage;
