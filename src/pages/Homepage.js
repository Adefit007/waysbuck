import React from "react";
import { Card, Container } from "react-bootstrap";
import background from "../assets/bg.svg";
import Product from "../components/Product";

export default function Homepage() {
  return (
    <div>
      <Container className="">
        <Card className="list-border bg-white text-white rounded-3">
          <Card.Img src={background} alt="Card image" />
          <Card.ImgOverlay></Card.ImgOverlay>
        </Card>
      </Container>
      <Product />
    </div>
  );
}
