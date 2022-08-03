import React, { useState } from "react";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";

export default function NavbarUser() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shows, setShows] = useState(false);

  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);

  const switchLogin = () => {
    setIsRegisterForm(false);
    setIsLoginForm(false);
  };

  const switchRegister = () => {
    setIsRegisterForm(true);
    setIsLoginForm(true);
  };

  return (
    <div>
      <Container>
        <Navbar fixed="top d-flex bg-white justify-content-between">
          <Navbar.Brand className="ms-3 ps-5">
            <img src={logo} style={{ maxWidth: "70px" }} alt="logobrand" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="me-3 fw-bolder text-danger">
              <Button variant="danger" onClick={handleShow}>
                Login
              </Button>
            </Nav.Link>
            <Nav.Link className="me-5 fw-bolder text-danger">
              <Button variant="danger" onClick={handleShows}>
                Signup
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body closeButton>
                  <div>
                    <h1 className="mb-4 text-danger fw-bolder">Login</h1>{" "}
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          className="border-danger"
                          type="email"
                          placeholder="your email"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlPassword1"
                      >
                        <Form.Control
                          className="border-danger"
                          type="password"
                          placeholder="your password"
                          autoFocus
                        />
                      </Form.Group>
                      <Button variant="danger" className="w-100">
                        Submit
                      </Button>
                    </Form>
                  </div>
                  <div className="mt-3 text-center">
                    <p>
                      Dont have an account please{" "}
                      <Button className="text-danger" onClick={switchRegister}>
                        Register
                      </Button>{" "}
                    </p>
                  </div>
                </Modal.Body>
              </Modal>
              <Modal show={shows} onHide={handleCloses}>
                <Modal.Body>
                  <h1 className="mb-4 text-danger fw-bolder">Register</h1>{" "}
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlName"
                    >
                      <Form.Control
                        className="border-danger"
                        type="text"
                        placeholder="your name"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        className="border-danger"
                        type="email"
                        placeholder="your email"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlPassword1"
                    >
                      <Form.Control
                        type="password"
                        className="border-danger"
                        placeholder="your password"
                        autoFocus
                      />
                    </Form.Group>
                    <Button variant="danger" className="w-100">
                      Submit
                    </Button>
                  </Form>
                  <div className="mt-3 text-center">
                    <p>
                      Already have an account please{" "}
                      <Button className="text-danger" onClick={switchLogin}>
                        Login
                      </Button>{" "}
                    </p>
                  </div>
                </Modal.Body>
              </Modal>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}
