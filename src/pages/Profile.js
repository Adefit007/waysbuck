import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profile from "../assets/profile.jpg";
import logo from "../assets/logo.svg";
import product1 from "../assets/product1.svg";
import barcode from "../assets/barcode.png";
import NavbarLogin from "../components/NavbarLogin";

function Profile() {
  return (
    <div>
      <NavbarLogin />
      <Container>
        <Row>
          <Col xs={12} md={6} className="ps-5 p-2">
            <Row>
              <Col xs={12} md={6}>
                <h4 className="text-start text-danger fw-bold fs-4">
                  My Profile
                </h4>
                <img
                  src={profile}
                  style={{ width: "100%", borderRadius: "8px" }}
                  className=""
                  alt=""
                />
              </Col>
              <Col xs={12} md={6} className="pt-5">
                <div>
                  <h4
                    className="text-start fw-semibold fs-4"
                    style={{ color: "#613D2B" }}
                  >
                    Full Name
                  </h4>
                  <h4 className="text-start fw-normal fs-4">Egi Ganteng</h4>
                </div>
                <div>
                  <h4
                    className="text-start fw-semibold fs-4"
                    style={{ color: "#613D2B" }}
                  >
                    Email
                  </h4>
                  <h4 className="text-start fw-normal fs-4">
                    egigans@mail.com
                  </h4>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <h4
                className="text-start fw-bold fs-4 mb-3"
                style={{ color: "#613D2B" }}
              >
                My Transaction
              </h4>
            </div>
            <Row
              className="p-3"
              style={{ backgroundColor: "#F6DADA", borderRadius: "5px" }}
            >
              <Col xs={12} md={8}>
                <Row className="pt-2">
                  <div className="d-flex mb-2">
                    <img
                      src={product1}
                      style={{ width: "25%", borderRadius: "8px" }}
                      className=""
                      alt=""
                    />
                    <ul className="text-start">
                      <li style={{ listStyle: "none", fontSize: "8px" }}>
                        <h3 className="text-danger fw-bold">
                          Ice Coffee Palm Sugar
                        </h3>
                      </li>
                      <li style={{ listStyle: "none", fontSize: "14px" }}>
                        <p className="text-danger fw-normal">
                          <span className="fw-bold">Saturday,</span> 5 march
                          2020
                        </p>
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
                      <li style={{ listStyle: "none", fontSize: "14px" }}>
                        {" "}
                        <p className="fw-normal" style={{ color: "#613D2B" }}>
                          Price : Rp. <span>27.000,-</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex mb-2">
                    <img
                      src={product1}
                      style={{ width: "25%", borderRadius: "8px" }}
                      className=""
                      alt=""
                    />
                    <ul className="text-start">
                      <li style={{ listStyle: "none", fontSize: "8px" }}>
                        <h4 className="text-danger fw-bold">
                          Ice Coffee Palm Sugar
                        </h4>
                      </li>
                      <li style={{ listStyle: "none", fontSize: "14px" }}>
                        <p className="text-danger fw-normal">
                          <span className="fw-bold">Saturday,</span> 5 march
                          2020
                        </p>
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
                      <li style={{ listStyle: "none", fontSize: "14px" }}>
                        {" "}
                        <p className="fw-normal" style={{ color: "#613D2B" }}>
                          Price : Rp. <span>27.000,-</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Col>
              <Col xs={12} md={4}>
                <div className="mb-3">
                  <img
                    src={logo}
                    style={{ width: "30%" }}
                    className=""
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={barcode}
                    style={{ width: "40%" }}
                    className="mb-3"
                    alt=""
                  />
                </div>
                <div
                  className="d-flex justify-content-center mb-3"
                  style={{
                    backgroundColor: "rgb(255,175,25, 0.5)",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    className="text-align-center fw-semibold"
                    style={{ color: "#FF9900" }}
                  >
                    Waiting Approve
                  </p>
                </div>
                <div className="">
                  <p className="fw-bold" style={{ color: "#974A4A" }}>
                    Sub total : Rp.{" "}
                    <span style={{ color: "#974A4A" }}>27.000</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
