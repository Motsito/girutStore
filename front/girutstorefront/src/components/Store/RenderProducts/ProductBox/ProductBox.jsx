import React, { useContext } from "react";
import GlobalContext from "../../../../context/GlobalContext";
import "./ProductBox.scss";

export default function ProductBox({ item }) {
  // Access the 'setModal' and 'setProduct' functions from the GlobalContext
  const { setModal, setProduct } = useContext(GlobalContext);

  // Extract relevant data from the 'item' prop
  const { name, company, img } = item;

  // Function to handle the click event on the product box
  const handleClick = () => {
    // Set the 'modal' state to true to open the modal
    setModal(true);

    // Set the 'product' state with the clicked product data
    setProduct(item);
  };

  return (
    <button className="box" onClick={() => handleClick()}>
      <img className="box__img" src={img} alt={company} />
      <p className="box__name">{name}</p>
    </button>
  );
}
