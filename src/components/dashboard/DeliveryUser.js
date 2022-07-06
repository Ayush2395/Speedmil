import React from "react";
import { Card, Table } from "react-bootstrap";

export default function DeliveryUser() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-4 text-secondary display-6 fw-bold">
            Delivery man
          </Card.Title>
          <Table responsive>
            <thead>
              <tr>
                <th>Sr. Number</th>
                <th>User Name</th>
                <th>Phone Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>4561237890</td>
                <td>On-Duty</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>4561237890</td>
                <td>On-Duty</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>4561237890</td>
                <td>On-Duty</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>4561237890</td> <td>Off-Duty</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>4561237890</td> <td>On-Duty</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}
