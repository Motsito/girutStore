import React, { useContext, useState } from "react";
import "./CartItem.scss";
import { Button, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import GlobalContext from "../../../../context/GlobalContext";

export default function CartItem({ _id, name, price, quantity }) {
  // Local state to manage item quantity
  const [itemQuantity, setItemQuantity] = useState(quantity);

  // Create an array of numbers from 0 to 9 for quantity selection
  const numbers = [...Array(10).keys()];

  // Access global context to get cart data and state variables
  const { cartReRender, setCartReRender } = useContext(GlobalContext);

  // Handle item deletion
  const handleDelete = async () => {
    try {
      const url = `http://localhost:5000/api/cart/${_id}`;
      const response = await axios.delete(url);
      console.log(response);
      // Trigger a re-render by toggling the cartReRender state
      setCartReRender(!cartReRender);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle quantity change
  const handleChange = async (number) => {
    console.log("there is a change", number);
    try {
      const url = `http://localhost:5000/api/cart/${_id}`;
      const body = {
        quantity: number,
      };
      const response = await axios.patch(url, body);
      console.log(response);
      // Trigger a re-render by toggling the cartReRender state
      setCartReRender(!cartReRender);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product">
      <h5 className="product__name">{name}</h5>

      <div className="product__price">${price}</div>

      <div className="product__actions">
        {/* Dropdown for quantity selection */}
        <DropdownButton
          className="ml-2"
          variant="secondary"
          size="sm"
          title={itemQuantity}
        >
          {numbers.map((number, i) => {
            return (
              <DropdownItem key={i * 3} onClick={() => handleChange(number)}>
                {number}
              </DropdownItem>
            );
          })}
        </DropdownButton>

        {/* Button to delete the item */}
        <Button onClick={() => handleDelete()} variant="danger" size="sm">
          <FontAwesomeIcon icon={faTrash} color="white" />
        </Button>
      </div>
    </div>
  );
}
