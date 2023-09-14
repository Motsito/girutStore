import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.scss";

import Cart from "./Cart/Cart.jsx"; // Cart component
import NavUser from "./NavUser/NavUser.jsx"; // NavUser component

export default function Navigation() {
  return (
    // Create a Bootstrap Navbar
    <Navbar expand="lg" className="nav">
      {/* Container to hold navigation items */}
      <Container className="nav__items">
        {/* Link to your external website */}
        <Nav.Link href="https://www.turing-ia.com/">
          {/* Image icon */}
          <img
            src="https://media.licdn.com/dms/image/C560BAQGR4gbrSWX6hQ/company-logo_200_200/0/1632149947606?e=1702512000&v=beta&t=wePmOe_FwEk9UxfjGFIq742aaX_3UnoxQwsp9Sq0E08"
            alt="turing icon"
            className="nav__icon"
          />
        </Nav.Link>

        {/* Cart component */}
        <Cart />

        {/* User navigation component */}
        <NavUser />
      </Container>
    </Navbar>
  );
}
