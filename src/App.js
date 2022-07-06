import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowUp,
  faCartArrowDown,
  faCartPlus,
  faCircleQuestion,
  faExclamationTriangle,
  faMoneyBillWave,
  faPhoneFlip,
  faTruckFast,
  faEye,
  faEyeSlash,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Error from "./components/Error";
import Login from "./components/auth/Login";
import AppState from "./context/AppState";
import Register from "./components/auth/Register";
import Verification from "./components/auth/Verification";
import OTPlogin from "./components/auth/OTPlogin";
import Dashboard from "./pages/Dashboard";
library.add(
  faArrowUp,
  faTruckFast,
  faCartPlus,
  faCartArrowDown,
  faMoneyBillWave,
  faCircleQuestion,
  faExclamationTriangle,
  faPhoneFlip,
  faEye,
  faEyeSlash,
  faMagnifyingGlass
);

export default function App() {
  function scrollHeader() {
    const header = document.querySelector("#header");
    const scrollY = window.pageYOffset;
    if (scrollY >= 100) {
      header.classList.add("header");
    } else {
      header.classList.remove("header");
    }
  }

  function scrollToTop() {
    const arrow = document.querySelector(".up_arrow");
    if (this.scrollY >= 560) {
      arrow.classList.add("show_arrow");
    } else {
      arrow.classList.remove("show_arrow");
    }
  }

  function navbarCollapseLinkItem() {
    const navbarLink = document.getElementById("basic-navbar-nav");
    const linkItem = document.querySelectorAll(".nav-link");
    linkItem.forEach((item) => {
      item.addEventListener("click", () => {
        if (navbarLink.getAttribute("class").includes("show")) {
          navbarLink.classList.remove("show");
        }
      });
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    window.addEventListener("scroll", scrollToTop);
    navbarCollapseLinkItem();
  }, []);
  return (
    <>
      <AppState>
        <Router>
          <NavMenu />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verify" element={<Verification />} />
              <Route path="/otplogin" element={<OTPlogin />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Container>
        </Router>
        <a href="#" rel="noreferrer" className="up_arrow">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </AppState>
    </>
  );
}
