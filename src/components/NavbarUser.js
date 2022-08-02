import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";

export default function NavbarUser() {
  return (
    <div>
      <Container>
        <Navbar sticky="top d-flex bg-white justify-content-between">
          <Navbar.Brand className="ms-3">
            <img src={logo} style={{ maxWidth: "70px" }} alt="logobrand" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="me-5 fw-bolder text-danger" href="#home">
              Login
            </Nav.Link>
            <Nav.Link className="me-5 fw-bolder text-danger" href="#logout">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}
