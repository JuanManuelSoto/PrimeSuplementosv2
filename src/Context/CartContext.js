import { createContext } from "react";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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

  const [opencart, setOpencart] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const order = {
    buyer: {
      name: "Juan",
      email: " primesuplementosv2",
      phone: "1235342",
    },
    items: cart.map((item) => ({
      name: item.name,
      id: item.id,
      price: item.price,
      quantity: item.quantity,
    })),
    total: totalPrice(),
  };

  const sendOrder = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        opencart,
        openForm,
        setOpenForm,
        clearCart,
        setOpencart,
        addToCart,
        totalPrice,
        totalProducts,
        removeProduct,
        sendOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
