import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { MdMailOutline } from "react-icons/md";
import "./Navbar.scss";
const Login = () => {
  return (
    <Navbar className="nav-bar" expand="lg" fixed="top">
      <Navbar.Brand href="/" className="nav-bar-brand text-uppercase">
        Hubino
      </Navbar.Brand>
      <Nav className="ml-auto ">
        <MdMailOutline className="nav-bar-icon" />
      </Nav>
    </Navbar>
  );
};

export default Login;
