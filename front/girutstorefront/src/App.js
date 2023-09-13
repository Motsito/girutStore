import React, { useEffect, useState } from "react";
import Router from "./router/Router.jsx";
import GlobalContext from "./context/GlobalContext.js";
import axios from "axios";

export default function App() {
  const [product, setProduct] = useState(null);
  const [modal, setModal] = useState(false);
  const [currentCart, setCurrentCart] = useState(null);
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    const getCartData = async () => {
      try {
        const url = "http://localhost:5000/api/cart";
        const response = await axios.get(url);

        setCurrentCart(response.data);
        setCartLoading(true);
      } catch (error) {
        console.log(error);
        setCartLoading(true);
      }
    };

    getCartData();
  }, [modal]);

  return (
    <GlobalContext.Provider
      value={{ product, setProduct, modal, setModal, currentCart, cartLoading }}
    >
      <Router />
    </GlobalContext.Provider>
  );
}
