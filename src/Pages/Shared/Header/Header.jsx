import React, { useContext } from "react";
import { Container, Nav, NavDropdown, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaAsterisk, FaAsymmetrik, FaUserCircle } from "react-icons/fa";
import ActiveLink from "../../../ActiveLink/ActiveLink";
// css file
import "./Header.css"




const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mt-3">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="secondary"
        variant="secondary"
        className="rounded"
      >
        <Container>
          <Navbar.Brand href="#home" className="text-white fw-bold fst-italic">
          <FaAsymmetrik style={{ fontSize: "3rem" }}></FaAsymmetrik>  Optimum House
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex gap-4">

              <ActiveLink
                to="/"
              >
                Home
              </ActiveLink>
              <ActiveLink to="/blog" >
                Blog
              </ActiveLink>
              <ActiveLink
                to="/error"
              >
                ErrorPage
              </ActiveLink>
              <ActiveLink
                to="/register"
              >
                Register
              </ActiveLink>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link href="#deets">
                  <FaUserCircle
                  title={user.email}
                    style={{ fontSize: "3rem" }}
                    className="bg bg-white rounded-circle"
                  >
                   
                  </FaUserCircle>
                  <img src={user.photoURL} title={user.photoURL} alt="" style={{width:"40px"}} className="rounded-circle ms-2"/>
                </Nav.Link>
              )}

              {user ? (
                <>
                  {/* <span className="my-auto text-white">{user.email}</span> */}

                  <Button onClick={handleLogOut} variant="secondary" title="You are successfully LogIn">
                    LogOut
                  </Button>
                </>
              ) : (
                <ActiveLink to="/login">
                  <Button variant="none text-white my-auto" title="Please Login !!!">Login</Button>
                </ActiveLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
