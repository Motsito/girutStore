import React, { useState } from "react";
import { Slider, Box } from "@mui/material";

export default function Filters() {
  const [nameFilter, setNameFilter] = useState(undefined);
  const [value, setValue] = React.useState([20, 1000]);

  function valuetext(value) {
    return `$${value}`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [starsValue, setStarsValue] = React.useState([0, 5]);

  function starsValuetext(value) {
    return `$${value}`;
  }

  const handleStarsValueChange = (event, newValue) => {
    setStarsValue(newValue);
  };

  const typesOfFilter = [
    "featured",
    "company",
    "name",
    "sort",
    "fields",
    "numericFilters",
  ];

  const checkState = () => {
    console.log(nameFilter);
  };

  return (
    <div>
      <div>
        Name:
        <input
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        ></input>
        <button onClick={() => checkState()}>Search</button>
      </div>

      <div style={{ display: "flex" }}>
        Price Range
        <Box sx={{ width: 200 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={2000}
          />
        </Box>
      </div>

      <div style={{ display: "flex" }}>
        Stars Range
        <Box sx={{ width: 200 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={starsValue}
            onChange={handleStarsValueChange}
            valueLabelDisplay="auto"
            getAriaValueText={starsValuetext}
            max={5}
          />
        </Box>
      </div>

      <div>
        sort by
        <div>
          name
          <input type="radio" />
          price
          <input type="radio" />
          stars
          <input type="radio" />
        </div>
      </div>
    </div>
  );
}
