import { createContext } from "react";

const GlobalContext = createContext({
  product: undefined,
  modal: undefined,
  currentCart: undefined,
  cartLoading: undefined,
  setCartLoading: () => {},
  setCurrentCart: () => {},
  setModal: () => {},
  setProduct: () => {},
});

export default GlobalContext;
