import React from "react";
import ProductBox from "./ProductBox/ProductBox";
import "./RenderProducts.scss";

export default function RenderProducts({ listOfProducts }) {
  return (
    <div className="renderArea">
      {listOfProducts.map((item, i) => (
        <ProductBox key={i} item={item} />
      ))}
    </div>
  );
}
