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
  // Access global context to get cart data and state variables
  const { currentCart, cartLoading, cartReRender, setCartReRender } =
    useContext(GlobalContext);

  // Handle emptying the cart
  const handleEmptyCart = async () => {
    try {
      const url = "http://localhost:5000/api/cart/";
      const response = await axios.delete(url);
      console.log(response);
      // Trigger a re-render by toggling the cartReRender state
      setCartReRender(!cartReRender);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Cart dropdown menu
    <NavDropdown
      title={
        <FontAwesomeIcon
          icon={faCartShopping}
          id="basic-nav-dropdown"
          style={{ color: "white" }}
        />
      }
    >
      {/* Subtotal section */}
      <NavDropdown.ItemText style={itemSubtotalStyle}>
        <h4>Subtotal</h4>
      </NavDropdown.ItemText>

      {/* Display the subtotal */}
      <NavDropdown.ItemText
        style={{
          ...itemSubtotalStyle,
          color: "#B12704",
          borderBottom: "1px solid black",
          padding: "0.5em 0;",
        }}
      >
        {cartLoading ? `$${getCartAmmount(currentCart)}` : "waiting"}
      </NavDropdown.ItemText>

      {/* Render cart items if available */}
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

      {/* Empty Cart button */}
      <div style={{ ...itemSubtotalStyle, margin: "10px 10px" }}>
        <Button variant="danger" size="sm" onClick={() => handleEmptyCart()}>
          Empty Cart
        </Button>
      </div>
    </NavDropdown>
  );
}
