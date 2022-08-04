import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataProduct } from "./DataDummy";

export default function Product() {
  return (
    <div>
      <Container>
        <h2 className="text-start text-danger my-4">
          <b>Let's Order</b>
        </h2>
        <Row className="gap-1">
          {dataProduct.map((item, index) => (
            <Col className="mb-3 ">
              <Link to={`/product/` + item.id} className="text-decoration-none">
                <Card
                  className="rounded-3 bgCard text-decoration-none"
                  style={{ width: "14rem" }}
                >
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body className="">
                    <Card.Title className="text-danger text-decoration-none">
                      {item.name}
                    </Card.Title>
                    <Card.Text className="text-danger text-decoration-none">
                      Rp {item.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
