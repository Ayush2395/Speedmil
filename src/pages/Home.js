import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import intro from "../assets/img/home_landing_imgGroup.webp";
import { auth } from "../backend/firebase.config";
import Explore from "../components/Explore";
import { useAppState } from "../context/AppState";

export default function Home() {
  const { user } = useAppState();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      if (!user.emailVerified) navigate("/verify");
      else if (user.emailVerified) navigate("/");
    });
  }, [user]);
  return (
    <>
      <section>
        <div className="main">
          <Row className="align-items-md-center">
            <Col
              xs={{ order: "last" }}
              sm={{ order: "first" }}
              md={{ order: "last" }}
              lg={{ order: "first" }}
            >
              <div className="home_intro mt-5 container">
                <h1 className="fw-bold display-1">
                  Speedmil <FontAwesomeIcon icon="fa-solid fa-truck-fast" />{" "}
                </h1>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  delectus cumque neque suscipit laboriosam dolor officiis eos
                  aut quasi, ipsa animi exercitationem ducimus quidem voluptatem
                  magni, unde, sint ab. Corrupti.
                </p>
                <Button as="a" href="#explore" className="btn_2">
                  Explore now
                </Button>
              </div>
            </Col>
            <Col
              xs="12"
              sm="12"
              md="6"
              className="d-flex justify-content-center align-items-center mt-5"
            >
              <div>
                <img className="home_img" src={intro} alt="landing page pic" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <Explore />
    </>
  );
}
