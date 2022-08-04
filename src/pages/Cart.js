import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import trash from "../assets/trash.svg";
import product1 from "../assets/product1.svg";
import NavbarLogin from "../components/NavbarLogin";

function Cart() {
  return (
    <div>
      <NavbarLogin />
      <Container>
        <Row className="pt-2">
          <Col xs={12} md={7} style={{}}>
            <div className="ps-5">
              <h4 className="text-start text-danger fw-bold mb-3">My Cart</h4>
              <p className="text-start text-danger fw-normal fs-5">
                Review Your Order
              </p>
              <div
                style={{
                  borderTop: "2px solid red",
                  borderBottom: "2px solid red",
                  width: "80%",
                }}
              >
                <div className="p-3 d-flex align-items-center">
                  <img
                    src={product1}
                    style={{ width: "15%", borderRadius: "8px" }}
                    className=""
                    alt=""
                  />
                  <div className="d-flex justify-content-between">
                    <div>
                      <ul className="text-start">
                        <li style={{ listStyle: "none", fontSize: "8px" }}>
                          <h4 className="text-danger fw-bold mb-3">
                            Ice Coffee Palm Sugar
                          </h4>
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "14px",
                            marginBottom: "-10px",
                          }}
                        >
                          <p className="text-danger fw-semibold">
                            {" "}
                            <snap
                              className="fw-bold"
                              style={{ color: "#613D2B" }}
                            >
                              Topping :
                            </snap>{" "}
                            berry boba, mango boba
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-danger fw-semibold">
                        Rp. <span>33.000</span>,-
                      </p>
                      <img src={trash} className="" alt="" />
                    </div>
                  </div>
                </div>
                <div className="p-3 d-flex align-items-center">
                  <img
                    src={product1}
                    style={{ width: "15%", borderRadius: "8px" }}
                    className=""
                    alt=""
                  />
                  <div className="d-flex">
                    <div>
                      <ul className="text-start">
                        <li style={{ listStyle: "none", fontSize: "8px" }}>
                          <h4 className="text-danger fw-bold mb-3">
                            Ice Coffee Palm Sugar
                          </h4>
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "14px",
                            marginBottom: "-10px",
                          }}
                        >
                          <p className="text-danger fw-semibold">
                            {" "}
                            <snap
                              className="fw-bold"
                              style={{ color: "#613D2B" }}
                            >
                              Topping :
                            </snap>{" "}
                            berry boba, mango boba
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-danger fw-semibold">
                        Rp. <span>33.000</span>,-
                      </p>
                      <img src={trash} className="" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} className="mt-5 p-5">
            <div
              className="p-2"
              style={{
                borderTop: "2px solid red",
                borderBottom: "2px solid red",
                width: "80%",
              }}
            >
              <div className="d-flex justify-content-between">
                <p className="text-danger">Subtotal</p>
                <p className="text-danger">Rp. 69.000,-</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-danger">Qty</p>
                <p className="text-danger">2</p>
              </div>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ width: "80%" }}
            >
              <p className="text-danger fw-bold">Total</p>
              <p className="text-danger fw-bold"> Rp. 69.000,-</p>
            </div>
            <div className="mt-5" style={{ width: "80%" }}>
              <Button
                className="btn btn-danger fw-bold px-5"
                style={{ width: "100%" }}
              >
                Pay
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
