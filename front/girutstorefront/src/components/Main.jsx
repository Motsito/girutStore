import React, { useContext } from "react";
import Nav from "./Nav/Navigation.jsx";
import Store from "./Store/Store.jsx";
import ProductPage from "./singlecomponents/ProductPage/ProductPage.jsx";
import GlobalContext from "../context/GlobalContext.js";

export default function Main() {
  // Access the 'modal' and 'product' values from the GlobalContext
  const { modal, product } = useContext(GlobalContext);

  return (
    <div>
      <Nav /> {/* Render the navigation component */}
      <Store /> {/* Render the store component */}
      {/* Conditional rendering based on the 'modal' state */}
      {modal ? (
        <ProductPage data={product} /> // Render the ProductPage if 'modal' is true
      ) : (
        <></> // Render an empty div if 'modal' is false
      )}
    </div>
  );
}
