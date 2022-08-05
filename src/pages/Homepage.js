import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import background from "../assets/bg.svg";
import NavbarLogin from "../components/NavbarLogin";
import NavbarUser from "../components/NavbarUser";
import Product from "../components/Product";

export default function Homepage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <div>
          <Container className="">
            <NavbarLogin />
            <Card className="list-border bg-white text-white rounded-3">
              <Card.Img src={background} alt="Card image" />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Card>
          </Container>
          <Product />
        </div>
      ) : (
        <div>
          <Container className="">
            <NavbarUser />
            <Card className="list-border bg-white text-white rounded-3">
              <Card.Img src={background} alt="Card image" />
              <Card.ImgOverlay></Card.ImgOverlay>
            </Card>
          </Container>
        </div>
      )}
    </>
  );
}
