import "./CheckoutOrder.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CheckoutOrder = () => {
  const { username, orderId } = useContext(CartContext);
  const loader = <div className="loader"></div>;

  return (
    <div className="CheckoutOrder-background">
      {orderId ? (
        <div className="CheckoutOrder-container">
          <h2>Thanks for your purhase {username} !</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="CheckoutOrder-container-Btn"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          <h3>Your order ID is {orderId} </h3>

          <a className="CheckoutOrder-container-Btn1" href={"/"}>
            Back to start
          </a>
        </div>
      ) : (
        loader
      )}
    </div>
  );
};

export default CheckoutOrder;
