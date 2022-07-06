import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Form, FormControl, Row, Stack } from "react-bootstrap";
import { motion } from "framer-motion";
import Orders from "../components/dashboard/Orders";
import DeliveryUser from "../components/dashboard/DeliveryUser";
import { Link } from "react-router-dom";

const fadeInVariant = {
  hide: {
    x: -2000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.3,
      type: "spring",
      stiffness: 80,
    },
  },
};

export default function Dashboard() {
  return (
    <>
      <motion.section variants={fadeInVariant} initial="hide" animate="visible">
        <div className="main">
          <h1 className="text-primary mb-3">Dashboard</h1>
          <div className="mb-3" style={{ maxWidth: "300px" }}>
            <Form className="mx-2 d-flex justify-content-center align-items-center">
              <FormControl type="search" placeholder="Search orders" />
              <Button className="mx-3 btn_2">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </Button>
            </Form>
          </div>
          <Row>
            <Col className="mb-3" xs={{ order: "first" }} sm="6" md="6">
              <Orders />
            </Col>
            <Col className="mb-3" xs={{ order: "first" }} sm="6" md="6">
              <DeliveryUser />
              <Stack direction="horizontal" className="my-3" gap="5">
                <Link to="/orders">
                  <Button>Orders</Button>
                </Link>
                <Link to="/delivery_man">
                  <Button>Delivery User</Button>
                </Link>
              </Stack>
            </Col>
          </Row>
        </div>
      </motion.section>
    </>
  );
}
