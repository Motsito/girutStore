import React, { useEffect, useState } from "react";
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
  //

  const radioProps = { radioValue, setRadioValue };

  return (
    <div className="filters">
      <div className="sort">
        <div className="sort__name">
          <span>Name: </span>
          <input
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          ></input>
        </div>

        <div className="sort__by">
          <span className="me-3">sort by:</span>
          <div>
            <RadioElement name="name" {...radioProps} />
            <RadioElement name="price" {...radioProps} />
            <RadioElement name="stars" {...radioProps} />
          </div>
        </div>
      </div>

      <div className="ranges">
        <div className="ranges__price" style={{ display: "flex" }}>
          <span className="rangeText">Price Range: </span>
          <SliderMM
            range={[100, 20000]}
            value={priceRange}
            setValue={setPriceRange}
          />
        </div>

        <div className="ranges__stars" style={{ display: "flex" }}>
          <span className="rangeText">Stars Range: </span>
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
