import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import RubberBand from "react-reveal/RubberBand";
import { Link } from "react-router-dom";

export default function CardPlate() {
  return (
    <>
      <Container>
        <RubberBand left>
          <Row className="mt-5 ">
            <Col xs="12" sm="12" md="6" lg="3" className="mb-3">
              <Card>
                <Card.Body>
                  <div className="w-100 mb-3 d-flex justify-content-center align-item-center">
                    <div className="card_icons">
                      <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
                    </div>
                  </div>
                  <Card.Title className="text-primary text-center fw-bold w-100 mb-3">
                    Book your parcel
                  </Card.Title>
                  <Card.Text className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio delectus cumque neque suscipit laboriosam
                  </Card.Text>
                  <Button as={Link} to="/booking" className="btn_2 w-100 mb-3">
                    Book parcel
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" sm="12" md="6" lg="3" className="mb-3">
              <Card>
                <Card.Body>
                  <div className="w-100 mb-3 d-flex justify-content-center align-item-center">
                    <div className="card_icons">
                      <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
                    </div>
                  </div>
                  <Card.Title className="text-primary text-center fw-bold w-100 mb-3">
                    Check your parcel
                  </Card.Title>
                  <Card.Text className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio delectus cumque neque suscipit laboriosam
                  </Card.Text>
                  <Button as={Link} to="/myparcel" className="btn_2 w-100 mb-3">
                    My parcel
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" sm="12" md="6" lg="3" className="mb-3">
              <Card>
                <Card.Body>
                  <div className="w-100 mb-3 d-flex justify-content-center align-item-center">
                    <div className="card_icons">
                      <FontAwesomeIcon icon="fa-solid fa-money-bill-wave" />
                    </div>
                  </div>
                  <Card.Title className="text-primary text-center fw-bold w-100 mb-3">
                    Payment
                  </Card.Title>
                  <Card.Text className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio delectus cumque neque suscipit laboriosam
                  </Card.Text>
                  <Button as={Link} to="/payment" className="btn_2 w-100 mb-3">
                    Payment
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" sm="12" md="6" lg="3" className="mb-3">
              <Card>
                <Card.Body>
                  <div className="w-100 mb-3 d-flex justify-content-center align-item-center">
                    <div className="card_icons">
                      <FontAwesomeIcon icon="fa-solid fa-circle-question" />
                    </div>
                  </div>
                  <Card.Title className="text-primary text-center fw-bold w-100 mb-3">
                    Help desk
                  </Card.Title>
                  <Card.Text className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio delectus cumque neque suscipit laboriosam
                  </Card.Text>
                  <Button as={Link} to="/help" className="btn_2 w-100 mb-3">
                    Contact us
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </RubberBand>
      </Container>
    </>
  );
}
