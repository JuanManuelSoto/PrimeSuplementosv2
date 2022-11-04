import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addToCart = (name, price, id, quantity, img) => {
    const foundProduct = cart.find((product) => product.id === id);
    const newPrice = price * quantity;
    if (!foundProduct) {
      setCart([...cart, { name, price, id, quantity, img, newPrice }]);
    }
  };

  const clearCart = () => setCart([]);

  /* controladores */

  const [opencart, setOpencart] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,

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
