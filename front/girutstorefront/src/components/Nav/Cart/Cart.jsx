import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { itemSubtotalStyle } from "../../../helper/style";
import getCartAmmount from "../../../functions/getCartAmmount";
import CartItem from "./CartItem/CartItem.jsx";

export default function cart() {
  const cartArray = [
    { name: "coal", price: 5, quantity: 2 },
    { name: "stone", price: 10, quantity: 1 },
  ];

  return (
    <NavDropdown
      title={
        <FontAwesomeIcon
          icon={faCartShopping}
          id="basic-nav-dropdown"
          style={{ color: "white" }}
        />
      }
    >
      <NavDropdown.ItemText style={itemSubtotalStyle}>
        <h4>Subtotal</h4>
      </NavDropdown.ItemText>

      <NavDropdown.ItemText
        style={{
          ...itemSubtotalStyle,
          color: "#B12704",
          borderBottom: "1px solid black",
          padding: "0.5em 0;",
        }}
      >
        {`$${getCartAmmount(cartArray)}`}
      </NavDropdown.ItemText>
      {cartArray.map((product, i) => {
        const { name, price, quantity } = product;
        return (
          <CartItem
            name={name}
            price={price}
            quantity={quantity}
            key={`name ${price * quantity}`}
          />
        );
      })}
    </NavDropdown>
  );
}
