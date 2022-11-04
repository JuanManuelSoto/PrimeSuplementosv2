import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addToCart = (name, price, id, quantity, img) => {
    const isInCart = cart.find((product) => product.id === id) ? true : false;
    const quantity2 = quantity + quantity;
    if (isInCart) {
      setCart(
        cart.map((product) => {
          return product.id === id
            ? {
                ...product,
                quantity: product.quantity + quantity,
                newPrice: price * quantity2,
              }
            : product;
        })
      );
    } else {
      setCart([
        ...cart,
        { name, price, id, quantity, img, newPrice: price * quantity },
      ]);
    }
  };
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };
  const totalProducts = () =>
    cart.reduce(
      (acumulador, actualProduct) => acumulador + actualProduct.quantity,
      0
    );

  const clearCart = () => setCart([]);
  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  /* controladores */

  const [opencart, setOpencart] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        opencart,
        clearCart,
        setOpencart,
        addToCart,
        totalPrice,
        totalProducts,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
