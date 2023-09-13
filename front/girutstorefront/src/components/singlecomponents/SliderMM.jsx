import { Box, Slider } from "@mui/material";
import React from "react";

export default function SliderMM({ range, value, setValue }) {
  function valuetext(value) {
    return `$${value}`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 150 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={range[1]}
      />
    </Box>
  );
}
