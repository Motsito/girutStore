import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { itemSubtotalStyle } from "../../../helper/style";

export default function NavUser() {
  return (
    <NavDropdown
      drop="start"
      title={<FontAwesomeIcon icon={faUser} color="white" />}
    >
      <NavDropdown.ItemText style={itemSubtotalStyle}>
        USER
      </NavDropdown.ItemText>

      <NavDropdown.Divider />

      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    </NavDropdown>
  );
}
