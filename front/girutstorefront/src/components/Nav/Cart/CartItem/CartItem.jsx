import React, { useState } from "react";
import "./CartItem.scss";
import { Button, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function CartItem({ _id, name, price, quantity }) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const numbers = [...Array(10).keys()];

  const handleDelete = async () => {
    console.log(_id);
    try {
      const url = `http://localhost:5000/api/cart/${_id}`;
      const response = await axios.delete(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product">
      <h5 className="product__name">{name}</h5>

      <div className="product__price">${price}</div>

      <div className="product__actions">
        <DropdownButton
          className="ml-2"
          variant="secondary"
          size="sm"
          title={itemQuantity}
        >
          {numbers.map((number) => {
            return (
              <DropdownItem onClick={() => setItemQuantity(number)}>
                {number}
              </DropdownItem>
            );
          })}
        </DropdownButton>

        <Button onClick={() => handleDelete()} variant="danger" size="sm">
          <FontAwesomeIcon icon={faTrash} color="white" />
        </Button>
      </div>
    </div>
  );
}
