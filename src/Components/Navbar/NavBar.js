import React from "react";
import { Link } from "react-router-dom";

import "../Navbar/Navbar.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../Images/MOJO-nav.png";

const NavBar = () => {
  return (
    <Container className="p-0" fluid={true}>
      <Navbar sticky="top" className="border-bottom nav" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="12%"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
          <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/services">
              Services
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;

