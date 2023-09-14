import React from "react";
import ProductBox from "./ProductBox/ProductBox";
import "./RenderProducts.scss";

export default function RenderProducts({ listOfProducts }) {
  return (
    <div className="renderArea">
      {/* Map through the list of products and render each one using ProductBox */}
      {listOfProducts.map((item, i) => (
        <ProductBox key={i} item={item} />
      ))}
    </div>
  );
}
