import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import product1 from "../assets/product1.svg";
import NavbarAdmin from "../components/NavbarAdmin";

function AddProduct() {
  return (
    <div>
      <NavbarAdmin />
      <Container>
        <Row>
          <Col xs={12} md={7}>
            <Form>
              <Form.Label className="text-start text-danger fw-semibold fs-1">
                Product
              </Form.Label>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="name product"
                  className="mb-4"
                />
                <Form.Control
                  type="text"
                  placeholder="price"
                  className="mb-4"
                />
                <Form.Control type="file" className="mb-4" />
              </Form.Group>
              <Button className="btn btn-danger" style={{ width: "100%" }}>
                Add Product
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={5} className="mt-5">
            <img
              src={product1}
              className=""
              style={{ height: "100%", borderRadius: "10px" }}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddProduct;
