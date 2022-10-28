import "./Cart.css";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { setOpencart, cart } = useContext(CartContext);

  const cartRender = () =>
    cart.map((item) => (
      <div key={item.id} className="CartRender-Background">
        <div key={item.img} className="Cart-img"></div>
        <div key={item.name} className="Cart-name"></div>
        <div key={item.price} className="Cart-price"></div>
        <div key={item.quantity} className="Cart-quantity"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="Cart-Svg-2"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </div>
    ));

  return (
    <div className="Cart-Background">
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
      </div>
    </div>
  );
};

export default Cart;
