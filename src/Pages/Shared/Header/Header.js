import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Images/banner-logo.png";
import "./Header.css";

const Header = () => {
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
          <NavLink to="/">
            <img width={60} src={logo} alt="" />
          </NavLink>
          <Navbar.Brand
            as={Link}
            to="/"
            className="ms-2 title fw-bolder header-title"
          >
            INFINITY ELECTRONICS GADGETS
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
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to={"/blogs"}
              >
                Blogs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to={"/login"}
              >
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
