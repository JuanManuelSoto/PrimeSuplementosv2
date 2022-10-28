import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addToCart = (name, price, id, quantity) => {
    setCart([...cart, { name, price, id, quantity }]);
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  /* controladores */

  const [opencart, setOpencart] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        isInCart,
        removeProduct,
        opencart,
        setOpencart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
