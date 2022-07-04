import React, { useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppState } from "../../context/AppState";

export default function OTPlogin() {
  const { phoneOTPlogin, handleErrorMessage, message, setMessage } =
    useAppState();
  const [number, setNumber] = useState("");

  const handleOTPlogin = async (event) => {
    event.preventDefault();
    setMessage("");

    if (number === "" || number === undefined) {
      return setMessage({ error: true, mag: "Enter your number" });
    } else if (number.length < 13) {
      return setMessage({
        error: true,
        msg: "Please check your country code ex: +91your-number",
      });
    }

    try {
      const response = await phoneOTPlogin(number);
      console.log(response);
    } catch (err) {
      handleErrorMessage(err);
      console.log(err.code);
    }
  };

  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {message?.msg && (
            <Alert
              variant={message?.error ? "danger" : "success"}
              dismissible
              onClose={() => setMessage("")}
            >
              {message?.msg}
            </Alert>
          )}
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-primary fw-bold fs-2 mb-3">
                OTP Login
              </Card.Title>
              <Form onSubmit={handleOTPlogin}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="phone">
                    Enter your Phone number
                  </Form.Label>
                  <Form.Control
                    id="phone"
                    type="text"
                    placeholder="example: +91xxx..."
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </Form.Group>
                <div className="recaptcha-container"></div>
                <Button type="submit" className="mb-3 btn_2 w-100">
                  Send OTP
                </Button>
                <hr />
                <Link to="/login" className="mb-3 btn btn_2 w-100">
                  Cancel
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
