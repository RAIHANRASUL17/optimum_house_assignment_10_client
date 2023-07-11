import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaGithub, FaGithubAlt, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import Toast from "react-bootstrap/Toast";
import useTitleSet from "../../../hooks/useTitleSet";

const Login = () => {
  const { signIn, googleSignIn, githubLogin} = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");



  // useTitleSet
  useTitleSet('LoginPage')
  /*_______________________________________________*/
  //step-a.1:- go exactly your destination to use location with useLocation
  const navigate = useNavigate();
  let location = useLocation();
  console.log("location check from login", location);
  let from = location.state?.from?.pathname || "/";
  /*_______________________________________________*/

  const handleLogin = (event) => {
    // step-1
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    /*___________________________________________________________________*/
    // password validation
    setError("");
    if (password.length < 6) {
      setError("please add at lest 6 characters in your password");
      return;
    }
    /*___________________________________________________________________*/
    // signIn/Login
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // step-a.3: for location
        navigate(from, { replace: true });
        // setError
        setError("");
        // setSuccess
        setSuccess("The user has successfully logged in");
        // for clear form
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        // setError
        setError(error.message);
      });
  };

  // googleSignIn
  const handleGoogleLogin = () => {
    googleSignIn(GoogleAuthProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log("----google", loggedUser);
        navigate(from, { replace: true });
      })
      .then((error) => {
        console.log(error);
      });
  };
  // handleGithubLogin
  const [user, setUser]= useState(null)
  const handleGithubLogin = () => {
    console.log("github login");
    githubLogin(GithubAuthProvider)
    .then((result)=>{
      const loggedUser= result.user;
      console.log('--git', loggedUser)
      navigate(from, { replace: true })
      setUser(loggedUser)
    })
    .then((error)=>{
      console.log(error)
    })
  };
  return (
    <div className="container mx-auto  w-75 border border-5 rounded mt-3 bg bg-light" >
      <h3>Please Login !!!</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button type="submit" className="w-75 btn btn-secondary" >
            Login
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <Form.Text className="text-success fs-4 fw-semibold">
            Don't Have An Account ? <Link to="/register" className="text-decoration-none">Register</Link>
          </Form.Text>
        </div>

        <div>
          <Form.Text className="text-danger">{error}</Form.Text>
          <br />
          <Form.Text className="text-success">{success}</Form.Text>
        </div>

        <div className="d-flex justify-content-center">
          <Button
            onClick={handleGoogleLogin}
            className="btn btn-secondary w-75"
          >
            <FaGoogle className="me-2"></FaGoogle>
            loginWithGoogle
          </Button>
        </div>

        <div className="d-flex justify-content-center">
          <Button
            onClick={handleGithubLogin}
            className="btn btn-secondary w-75 my-2"
          >
            <FaGithub></FaGithub>
            -loginWithGithub
          </Button>
        </div>
      </Form>
      <div>
      </div>
    </div>
  );
};

export default Login;
