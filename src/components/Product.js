import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import product from "../assets/product.svg";
import { dataProduct } from "./DataDummy";

export default function Product() {
  return (
    <div>
      <Container>
        <h2 className="text-start text-danger my-4">
          <b>Let's Order</b>
        </h2>
        <Row>
          {dataProduct.map((item, index) => (
            <Col className="mb-3 ">
              <Card className="rounded-3 bgCard" style={{ width: "14rem" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body className="">
                  <Card.Title className="text-danger">{item.name}</Card.Title>
                  <Card.Text className="text-danger">Rp {item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
