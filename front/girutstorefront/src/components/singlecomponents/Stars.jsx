import React from "react";
import ReactStars from "react-rating-stars-component";

export default function Stars({ value }) {
  return (
    <ReactStars
      count={5}
      size={15}
      activeColor="#ffd700"
      value={value}
      isHalf={true}
      edit={false}
    />
  );
}
