import React, { useEffect, useState } from "react";
import logo from "../assets/img/speedmil.com.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../backend/firebase.config";
import { useAppState } from "../context/AppState";

export default function NavMenu() {
  const [switchBTN, setSwitchBTN] = useState(false);
  const { userLogOut } = useAppState();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setSwitchBTN(false);
      } else {
        setSwitchBTN(true);
      }
    });
  }, []);

  const handleUserLogin = async () => {
    try {
      await userLogOut();
      navigate("/login");
    } catch (err) {
      console.log(err.code);
    }
  };

  return (
    <>
      <Navbar fixed="top" bg="light" expand="lg" id="header">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link data-target=".navbar-collapse.show" as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/dashboard">
                Dashboard
              </Nav.Link>
            </Nav>
            {switchBTN ? (
              <Button onClick={handleUserLogin} className="btn btn-primary">
                Log Out
              </Button>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
