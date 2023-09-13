import React from "react";

export default function RadioElement({ name, radioValue, setRadioValue }) {
  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <>
      <label htmlFor={name}> {name} </label>
      <input
        id={name}
        value={name}
        checked={radioValue === name}
        onChange={handleRadioChange}
        type="radio"
      />
    </>
  );
}
