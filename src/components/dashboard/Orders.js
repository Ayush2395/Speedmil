import React from "react";
import { Card, Table } from "react-bootstrap";

export default function Orders() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-4 text-secondary display-6 fw-bold">
            Orders
          </Card.Title>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Sr. Number</th>
                <th>User Name</th>
                <th>Product Name</th>
                <th>Address</th>
                <th>Phone no.</th>
                <th>Pin code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Boat RockerZ 141 Airdop</td>
                <td>123-A/Somewhere else, India</td>
                <td>7894561230</td>
                <td>789456</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Boat RockerZ 141 Airdop</td>
                <td>123-A/Somewhere else, India</td> <td>7894561230</td>
                <td>789456</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Boat RockerZ 141 Airdop</td>
                <td>123-A/Somewhere else, India</td> <td>7894561230</td>
                <td>789456</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Boat RockerZ 141 Airdop</td>
                <td>123-A/Somewhere else, India</td> <td>7894561230</td>
                <td>789456</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Boat RockerZ 141 Airdop</td>
                <td>123-A/Somewhere else, India</td> <td>7894561230</td>
                <td>789456</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}
