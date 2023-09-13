import React, { useState } from "react";
import "./ProductPage.scss";
import Stars from "../../Stars";
import { increase, decrease } from "../../../functions/changeCountervalue";

export default function ProductPage({ data }) {
  const firstProduct = data[0];
  const [counter, setCounter] = useState(1);
  const { name, company, img, rating, price } = firstProduct;

  return (
    <div className="productPage">
      <img className="productPage__img" src={img} alt={company} />

      <div className="productPage__stats">
        <h5>{name}</h5>

        <div className="dualStat">
          <p className="rating">
            <Stars value={rating} />
            {rating}
          </p>

          <p className="company">{company}</p>
        </div>

        <h6 className="singleStat price">${price}</h6>

        <div className="bottom">
          <div className="counter">
            <button
              className="button counter"
              onClick={() => decrease(setCounter)}
            >
              -
            </button>

            <div className="number">{counter}</div>

            <button
              className="button counter"
              onClick={() => increase(setCounter)}
            >
              +
            </button>
          </div>

          <button className="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
