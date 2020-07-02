import React from "react";
import { Navbar } from "react-bootstrap";
import "./Navbar.scss";
const Login = () => {
  return (
    <Navbar className="nav-bar" expand="lg" fixed="top">
      <Navbar.Brand href="#">Hubino</Navbar.Brand>
    </Navbar>
  );
};

export default Login;
