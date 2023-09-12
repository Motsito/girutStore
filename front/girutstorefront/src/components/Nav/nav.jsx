import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Cart from "./Cart/Cart.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.scss";
import NavUser from "./NavUser/NavUser.jsx";

export default function nav() {
  return (
    <Navbar expand="lg" className="nav">
      <Container className="nav__items">
        <Nav.Link href="https://www.turing-ia.com/">
          <img
            src="https://media.licdn.com/dms/image/C560BAQGR4gbrSWX6hQ/company-logo_200_200/0/1632149947606?e=1702512000&v=beta&t=wePmOe_FwEk9UxfjGFIq742aaX_3UnoxQwsp9Sq0E08"
            alt="turing icon"
            className="nav__icon"
          />
        </Nav.Link>

        <Cart />

        <NavUser />
      </Container>
    </Navbar>
  );
}
