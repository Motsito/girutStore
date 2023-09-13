import React, { useContext } from "react";
import GlobalContext from "../../../../context/GlobalContext";
import "./ProductBox.scss";

export default function ProductBox({ item }) {
  const { setModal, setProduct } = useContext(GlobalContext);

  const { name, company, img } = item;

  const handleClick = () => {
    setModal(true);
    setProduct(item);
  };

  return (
    <button className="box" onClick={() => handleClick()}>
      <img className="box__img" src={img} alt={company} />
      <p className="box__name">{name}</p>
    </button>
  );
}
