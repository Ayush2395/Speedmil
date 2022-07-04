import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "../../backend/firebase.config";
import { useAppState } from "../../context/AppState";

export default function Verification() {
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
          <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "90vh" }}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Card>
                <Card.Body>
                  <Card.Title className="fw-bold text-secondary">
                    Verify your mail
                  </Card.Title>
                  <Card.Text>
                    Please check your mail inbox or spam folder to verify your{" "}
                    {user.email} ID.
                  </Card.Text>
                  <Card.Text>
                    After verified your mail, refresh the page.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
