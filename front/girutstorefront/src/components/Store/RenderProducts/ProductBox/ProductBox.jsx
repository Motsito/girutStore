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

//import ReactStars from "react-rating-stars-component";
//working star
// <ReactStars
// count={5}
// size={15}
// activeColor="#ffd700"
// value={4.5}
// isHalf={true}
// edit={false}
// />
