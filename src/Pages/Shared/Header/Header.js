import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../Images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        sticky="top"
        className="shadow-lg"
        variant="light"
      >
        <Container>
          <NavLink to="/" className="me-2">
            <img width={50} src={logo} alt="" />
          </NavLink>
          <Navbar.Brand as={Link} to="/" className="fw-bolder header-title">
            INFINITY ELECTRONICS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navbar-color">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to={"/"}
              >
                Home
              </NavLink>
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to={"/manageInventory"}
                >
                  Manage Items
                </NavLink>
              )}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to={"/blogs"}
              >
                Blogs
              </NavLink>
              {user ? (
                <NavLink
                  onClick={() => signOut(auth)}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to={"/login"}
                >
                  LogOut
                </NavLink>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to={"/login"}
                >
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
