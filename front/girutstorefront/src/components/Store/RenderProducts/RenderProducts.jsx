import React from "react";
import ProductBox from "./ProductBox/ProductBox";
import "./RenderProducts.scss";

export default function RenderProducts({ data }) {
  const firstProduct = data[0];

  return (
    <div className="renderArea">
      <ProductBox firstProduct={firstProduct} />
    </div>
  );
}
