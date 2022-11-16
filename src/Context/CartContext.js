import { createContext, useEffect } from "react";
import { useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

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

  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState();

  const [CheckoutStatus, setCheckoutStatus] = useState(false);
  const [CheckoutOrderStatus, setCheckoutOrderStatus] = useState(false);

  const [opencart, setOpencart] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const clearCart = () => setCart([]);

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const order = {
    buyer: {
      name: username,
      email: Email,
      phone: Phone,
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
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };

  /*DATA FETCH*/

  const [ParamPath1, setParamPath1] = useState("");

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [FinalData, setFinalData] = useState([]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    const queryFilter = query(
      queryCollection,
      where("category", "==", ParamPath1)
    );
    getDocs(queryCollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
    getDocs(queryFilter).then((res) =>
      setData1(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, [ParamPath1]);

  useEffect(() => {
    if (ParamPath1 === "Suplementos" || ParamPath1 === "Merchandising") {
      setFinalData(data1);
    } else if (ParamPath1 === "Home") {
      setFinalData(data);
    }
    if (FinalData.length > 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [ParamPath1, data, data1, FinalData, loaded]);

  return (
    <CartContext.Provider
      value={{
        cart,
        opencart,
        openForm,
        orderId,
        CheckoutOrderStatus,
        CheckoutStatus,
        username,
        FinalData,
        loaded,
        setOpenForm,
        clearCart,
        setOpencart,
        addToCart,
        totalPrice,
        totalProducts,
        removeProduct,
        sendOrder,
        setUsername,
        setEmail,
        setPhone,
        setOrderId,
        setCheckoutOrderStatus,
        setCheckoutStatus,
        setParamPath1,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
