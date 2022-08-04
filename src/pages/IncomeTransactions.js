import React from "react";
import { Container, Table } from "react-bootstrap";
import { dataIncome } from "../components/DataDummy";
import NavbarAdmin from "../components/NavbarAdmin";

export default function IncomeTransaction() {
  return (
    <div>
      <NavbarAdmin />
      <Container>
        <div>
          <h1 className="text-start text-danger fw-semibold mb-5 mt-2">
            Income Transaction
          </h1>
        </div>
        <Table>
          <thead
            style={{ backgroundColor: "#E5E5E5", border: "1px solid grey" }}
          >
            <tr>
              <th style={{ border: "1px solid grey" }}>No</th>
              <th style={{ border: "1px solid grey" }}>Name</th>
              <th style={{ border: "1px solid grey" }}>Address</th>
              <th style={{ border: "1px solid grey" }}>Post Code</th>
              <th style={{ border: "1px solid grey" }}>Income</th>
              <th style={{ border: "1px solid grey" }}>Status</th>
            </tr>
          </thead>
          <tbody style={{ border: "1px solid grey" }}>
            {dataIncome.map((item, index) => (
              <tr>
                <td style={{ border: "1px solid grey" }}>{item.id}</td>
                <td style={{ border: "1px solid grey" }}>{item.name}</td>
                <td style={{ border: "1px solid grey" }}>{item.address}</td>
                <td style={{ border: "1px solid grey" }}>{item.postcode}</td>
                <td style={{ border: "1px solid grey" }}>Rp.{item.income}</td>
                <td style={{ border: "1px solid grey" }}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
