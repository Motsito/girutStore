import { createContext } from "react";

// Create a context with default values
const GlobalContext = createContext({
  product: undefined, // Product data
  modal: undefined, // Modal visibility
  currentCart: undefined, // Current cart data
  cartLoading: undefined, // Cart loading state
  cartReRender: undefined, // Cart re-render state
  setCartReRender: () => {}, // Function to set cart re-render state
  setCartLoading: () => {}, // Function to set cart loading state
  setCurrentCart: () => {}, // Function to set current cart data
  setModal: () => {}, // Function to set modal visibility
  setProduct: () => {}, // Function to set product data
});

export default GlobalContext;
