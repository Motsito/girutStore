import { Box, Slider } from "@mui/material";
import React from "react";

export default function SliderMM({ range, value, setValue }) {
  // Function to format the displayed value
  function valuetext(value) {
    return `$${value}`;
  }

  // Callback when the slider value changes
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        value={value} // Current value of the slider
        onChange={handleChange} // Callback when value changes
        valueLabelDisplay="auto" // Display value label
        getAriaValueText={valuetext} // Function to format the value label
        max={range[1]} // Maximum value of the slider
      />
    </Box>
  );
}
