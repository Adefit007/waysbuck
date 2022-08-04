import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import berry from "../assets/berry.svg";
import NavbarAdmin from "../components/NavbarAdmin";
import NavbarLogin from "../components/NavbarLogin";

function AddToping() {
  return (
    <div>
      <NavbarAdmin />
      <Container>
        <Row>
          <Col xs={12} md={7}>
            <Form>
              <Form.Label className="text-start text-danger fw-semibold fs-1">
                Toping
              </Form.Label>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="name toping"
                  className="mb-4"
                />
                <Form.Control
                  type="text"
                  placeholder="price"
                  className="mb-4"
                />
                <Form.Control type="file" className="mb-4" />
              </Form.Group>
              <Button className="btn btn-danger" style={{ width: "70%" }}>
                Add Product
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={5}>
            <img
              src={berry}
              alt=""
              style={{ width: "70%", borderRadius: "7px" }}
              className=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddToping;
