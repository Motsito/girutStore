import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // FontAwesome user icon
import { itemSubtotalStyle } from "../../../helper/style"; // Style definition

export default function NavUser() {
  return (
    // Create a user dropdown menu
    <NavDropdown
      drop="start"
      title={<FontAwesomeIcon icon={faUser} color="white" />}
    >
      {/* User name or label */}
      <NavDropdown.ItemText style={itemSubtotalStyle}>
        USER
      </NavDropdown.ItemText>

      {/* Divider line */}
      <NavDropdown.Divider />

      {/* Dropdown menu items */}
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    </NavDropdown>
  );
}
