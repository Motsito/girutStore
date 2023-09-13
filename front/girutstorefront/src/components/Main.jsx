import React, { useContext } from "react";
import Nav from "./Nav/nav.jsx";
import Store from "./Store/Store.jsx";
import ProductPage from "./singlecomponents/ProductPage/ProductPage.jsx";
import GlobalContext from "../context/GlobalContext.js";

export default function Main() {
  const { modal, product } = useContext(GlobalContext);

  return (
    <div>
      <Nav />
      <Store />
      {modal ? <ProductPage data={product} /> : <div></div>}
    </div>
  );
}
