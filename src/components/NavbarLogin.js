import React from "react";
import {
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.jpg";
import cart from "../assets/cart.svg";
import profile1 from "../assets/icon-profile.svg";
import logout from "../assets/logout.svg";

export default function NavbarLogin() {
  const profilToggle = (
    <Image src={profile} width="50" height="50" className=" rounded-circle" />
  );

  const profileVector = <Image src={profile1} width="15" height="15" />;

  const logoutIcon = <Image src={logout} width="15" height="15" />;
  return (
    <div>
      <Container>
        <Navbar fixed="top d-flex bg-white justify-content-between">
          <Navbar.Brand className="ms-3 ps-5">
            <img src={logo} style={{ maxWidth: "70px" }} alt="logobrand" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="me-3 mt-2 text-danger">
              <img src={cart} style={{ maxWidth: "40px" }} />
            </Nav.Link>
            <Nav.Link className="align-item-center justify-content-center me-5 pe-5 fw-bolder text-danger">
              <NavDropdown title={profilToggle}>
                <Dropdown.Item className="text-danger" href="#/action-1">
                  {profileVector}
                  <span> Profile</span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="text-danger" href="#/action-2">
                  {logoutIcon}
                  <span> Logout</span>
                </Dropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}
