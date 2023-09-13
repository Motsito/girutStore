import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Button, NavDropdown } from "react-bootstrap";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { itemSubtotalStyle } from "../../../helper/style";
import getCartAmmount from "../../../functions/getCartAmmount";
import CartItem from "./CartItem/CartItem.jsx";
import GlobalContext from "../../../context/GlobalContext";
import axios from "axios";

export default function Cart() {
  const { currentCart, cartLoading } = useContext(GlobalContext);

  const cartArray = [
    { name: "coal", price: 5, quantity: 2 },
    { name: "stone", price: 10, quantity: 1 },
  ];

  const handleEmptyCart = async () => {
    try {
      const url = "http://localhost:5000/api/cart/";
      const response = await axios.delete(url);
      console.log(response);
    } catch (error) {
      console.log();
    }
  };

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
        {`$${getCartAmmount(currentCart)}`}
      </NavDropdown.ItemText>

      {cartLoading ? (
        currentCart.map((product, i) => {
          const { _id, name, price, quantity } = product;
          return (
            <CartItem
              _id={_id}
              name={name}
              price={price}
              quantity={quantity}
              key={`name ${price * quantity}`}
            />
          );
        })
      ) : (
        <></>
      )}
      <div style={{ ...itemSubtotalStyle, margin: "10px 10px" }}>
        <Button variant="danger" size="sm" onClick={() => handleEmptyCart()}>
          Empty Cart
        </Button>
      </div>
    </NavDropdown>
  );
}
