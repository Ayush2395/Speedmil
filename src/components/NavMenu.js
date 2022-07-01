import React from "react";
import logo from "../assets/img/speedmil.com.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function NavMenu() {
  return (
    <>
      <Navbar className="navbar" fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/shopping">
                Shopping
              </Nav.Link>
            </Nav>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
