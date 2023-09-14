import React from "react";
import ReactStars from "react-rating-stars-component";

export default function Stars({ value }) {
  return (
    <ReactStars
      count={5} // Number of stars in the rating
      size={15} // Size of the stars (in pixels)
      activeColor="#ffd700" // Color of active (filled) stars
      value={value} // Rating value to display
      isHalf={true} // Enable half-star ratings
      edit={false} // Disable user interaction (read-only)
    />
  );
}
