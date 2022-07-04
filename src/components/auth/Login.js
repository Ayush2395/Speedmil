import { FcGoogle } from "react-icons/fc";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppState } from "../../context/AppState";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../backend/firebase.config";

export default function Login() {
  // This is the Context API states and methods from Custom hooks which is created by context method of React js, all the states and method inside the useAppState() method is defined inside the src-->context-->AppState.js file
  const {
    loginUser,
    message,
    setMessage,
    handleErrorMessage,
    googleSignIn,
    user,
  } = useAppState();

  //   These are the states for inputs and show/hide password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //   This function helps to login  user with verified email, if the mail isn't valid u can't enter the site until u verify the mail, which is sent to users mail box
  const handleUserLogin = async (event) => {
    event.preventDefault();
    setMessage("");

    // show error message if user miss any input fields
    if (email === "" || password === "")
      return setMessage({ error: true, msg: "Missing field" });

    // register the user with loginUser() method, which is defined in the Context file and then navigate to home page.
    try {
      await loginUser(email, password);
      navigate("/");
    } catch (err) {
      handleErrorMessage(err);
    }

    // after registeration done the input fields set to empty string again.
    setEmail("");
    setPassword("");
  };

  //   This function pop-up the google login tab and after successfully signin it will redirect to verify page, where new user have to verify their email first which is sent to their mail id's, if the email is verified then it will redirect to home page otherwise it still on login page.
  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      handleErrorMessage(err);
    }
  };

  // check that if user email is verified or not, if verified then it will be redirect to home page, else if user try to enter again to login url anonymously, it will redirect to home page again.
  useEffect(() => {
    onAuthStateChanged(auth, () => {
      if (!user.emailVerified) {
        navigate("/verify");
      } else if (user.emailVerified) navigate("/");
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
            <div className="w-100" style={{ maxWidth: "500px" }}>
              {message?.msg && (
                <Alert
                  variant={message?.error ? "danger" : "success"}
                  dismissible
                  onClose={() => setMessage("")}
                >
                  {message?.msg}
                </Alert>
              )}
              <Card className="mb-5">
                <Card.Body>
                  <Card.Title className="w-100 text-center fw-bold display-6">
                    Speedmil
                  </Card.Title>
                  <Card.Text className="w-100 text-center fw-bold">
                    Login
                  </Card.Text>
                  <Form onSubmit={handleUserLogin}>
                    <Form.Group className="mb-3">
                      <Form.Label hmtlFor="email">Email</Form.Label>
                      <Form.Control
                        id="email"
                        type="email"
                        placeholder="example@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label hmtlFor="password">Password</Form.Label>
                      {/* By using ternary operator we set the show/hide method to password, it'll show password and hide the password, when we click on eye icon */}
                      {showPassword ? (
                        <InputGroup>
                          <InputGroup.Text
                            onClick={() => setShowPassword(false)}
                          >
                            <FontAwesomeIcon icon="fa-solid fa-eye" />
                          </InputGroup.Text>
                          <Form.Control
                            id="password"
                            type="text"
                            placeholder="your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </InputGroup>
                      ) : (
                        <InputGroup>
                          <InputGroup.Text
                            onClick={() => setShowPassword(true)}
                          >
                            <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
                          </InputGroup.Text>
                          <Form.Control
                            id="password"
                            type="password"
                            placeholder="your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </InputGroup>
                      )}
                    </Form.Group>
                    <Button type="submit" className="w-100 mb-3 btn_2">
                      Login
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              <Stack
                className="mt-5 mb-3 d-flex justify-content-center"
                gap={5}
                direction="horizontal"
              >
                <FcGoogle
                  onClick={handleGoogleLogin}
                  className="btn_2"
                  size="50px"
                  style={{ borderRadius: "50%", padding: "5px" }}
                />
                <FontAwesomeIcon
                  className="btn_2"
                  icon="fa-solid fa-phone-flip"
                  size={"2x"}
                  style={{ borderRadius: "50%", padding: "5px" }}
                />
              </Stack>
              <p className="w-100 text-center mb-3">
                {/* switch between the register and login page */}
                Don't have an account? &nbsp;
                <Link className="text-primary" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
