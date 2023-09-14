import React, { useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext.js"; // Importing the GlobalContext
import axios from "axios";
import Main from "./components/Main.jsx"; // Importing the Main component

export default function App() {
  // State variables for managing product data, modal visibility, cart data, and related states
  const [product, setProduct] = useState(null); // Product state
  const [modal, setModal] = useState(false); // Modal visibility state
  const [currentCart, setCurrentCart] = useState(null); // Cart data state
  const [cartLoading, setCartLoading] = useState(false); // Cart loading state
  const [cartReRender, setCartReRender] = useState(false); // State for triggering cart re-render

  useEffect(() => {
    // Effect for loading cart data when modal or cartReRender state changes
    const getCartData = async () => {
      try {
        const url = "http://localhost:5000/api/cart"; // URL for fetching cart data
        const response = await axios.get(url); // Fetch cart data from the server

        setCurrentCart(response.data); // Update currentCart with fetched data
        setCartLoading(true); // Set cart loading state to true
      } catch (error) {
        console.log(error); // Log any errors that occur during data fetching
        setCartLoading(true); // Set cart loading state to true even in case of an error
      }
    };

    getCartData(); // Invoke the function to fetch cart data when dependencies change
  }, [modal, cartReRender]); // Dependencies that trigger the effect when they change

  return (
    <GlobalContext.Provider
      value={{
        // Providing state variables and functions to child components via context
        product,
        setProduct,
        modal,
        setModal,
        currentCart,
        cartLoading,
        cartReRender,
        setCartReRender,
      }}
    >
      <Main />{" "}
      {/* Rendering the Main component within the GlobalContext.Provider */}
    </GlobalContext.Provider>
  );
}
