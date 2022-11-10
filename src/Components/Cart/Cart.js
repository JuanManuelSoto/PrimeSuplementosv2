import "./Cart.css";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { setOpencart, cart, removeProduct, totalPrice, setOpenForm } =
    useContext(CartContext);

  const cartRender = () =>
    cart.map((item) => (
      <div key={item.id} className="CartRender-Background">
        <img alt="" src={item.img} className="CartRender-img" />
        <div className="CartRender-B1">
          <p className="CartRender-Txt1"> {item.name}</p>
          <p className="CartRender-Txt2">
            {" "}
            Subtotal:
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(item.newPrice)}
          </p>
        </div>
        <p className="CartRender-Txt3">Quantity: {item.quantity}</p>
        <svg
          onClick={() => removeProduct(item.id)}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="CartRender-Svg-2"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fillRule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </div>
    ));

  return (
    <div className="Cart-Background">
      {cart.length > 0 ? (
        <div className="Cart-Content">
          <div className="Cart-C-B1">
            <svg
              onClick={() => setOpencart(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="Cart-Svg"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <div className="Cart-C-B2">{cartRender()}</div>
          <div className="Cart-C-B3">
            <p className="Cart-C-B3-Txt1"> Final Price: ${totalPrice()}</p>
            <button
              className="Cart-C-B3-Btn1"
              onClick={() => setOpenForm(true) & setOpencart(false)}
            >
              Set Order
            </button>
          </div>
        </div>
      ) : (
        <div className="EmptyCartContainer">
          <p className="Cart-C-B4-Txt1">Cart is Empty</p>
          <Link
            to="/"
            className="Cart-C-B4-Txt2"
            onClick={() => setOpencart(false)}
          >
            Buy something
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
