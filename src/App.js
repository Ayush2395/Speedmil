import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { mainScript } from "./assets/img/js/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowUp,
  faCartArrowDown,
  faCartPlus,
  faCircleQuestion,
  faExclamationTriangle,
  faMoneyBillWave,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import Error from "./components/Error";
library.add(
  faArrowUp,
  faTruckFast,
  faCartPlus,
  faCartArrowDown,
  faMoneyBillWave,
  faCircleQuestion,
  faExclamationTriangle
);

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = { mainScript };
  }, []);
  return (
    <>
      <Router>
        <NavMenu />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </Router>
      <a href="#" rel="noreferrer" className="up_arrow">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </>
  );
}
