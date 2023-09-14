import React from "react";
import SliderMM from "../../singlecomponents/SliderMM";
import "./Filters.scss";
import RadioElement from "../../singlecomponents/RadioElement";

export default function Filters({
  nameFilter,
  setNameFilter,
  radioValue,
  setRadioValue,
  priceRange,
  setPriceRange,
  starsRange,
  setStarsRange,
}) {
  // Props for radio buttons
  const radioProps = { radioValue, setRadioValue };

  return (
    <div className="filters">
      {/* Sorting and filtering options */}
      <div className="sort">
        <div className="sort__name">
          {/* Filter by name input */}
          <span>Name: </span>
          <input
            className="input"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          ></input>
        </div>

        <div className="sort__by">
          {/* Sort by radio buttons */}
          <span className="me-3">sort by:</span>
          <div>
            {/* Radio buttons for name, price, and stars sorting */}
            <RadioElement name="name" {...radioProps} />
            <RadioElement name="price" {...radioProps} />
            <RadioElement name="stars" {...radioProps} />
          </div>
        </div>
      </div>

      {/* Price and stars range sliders */}
      <div className="ranges">
        <div className="ranges__price" style={{ display: "flex" }}>
          {/* Price Range */}
          <span className="rangeText">Price Range: </span>
          {/* Price range slider component */}
          <SliderMM
            range={[100, 20000]}
            value={priceRange}
            setValue={setPriceRange}
          />
        </div>

        <div className="ranges__stars" style={{ display: "flex" }}>
          {/* Stars Range */}
          <span className="rangeText">Stars Range: </span>
          {/* Stars range slider component */}
          <SliderMM
            range={[0, 5]}
            value={starsRange}
            setValue={setStarsRange}
          />
        </div>
      </div>
    </div>
  );
}
