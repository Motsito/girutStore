import { createContext } from "react";

const GlobalContext = createContext({
  product: undefined,
  modal: undefined,
  currentCart: undefined,
  cartLoading: undefined,
  cartReRender: undefined,
  setCartReRender: () => {},
  setCartLoading: () => {},
  setCurrentCart: () => {},
  setModal: () => {},
  setProduct: () => {},
});

export default GlobalContext;
