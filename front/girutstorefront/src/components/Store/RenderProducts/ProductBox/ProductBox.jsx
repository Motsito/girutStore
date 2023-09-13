import React from "react";

import "./ProductBox.scss";

export default function ProductBox({ firstProduct }) {
  const { name, company, rating, price, img } = firstProduct;

  return (
    <a className="box" href="/product">
      <img className="box__img" src={img} alt={company} />
      <div className="box__name">{name}</div>
    </a>
  );
}
