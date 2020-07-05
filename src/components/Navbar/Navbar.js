import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { MdMailOutline } from "react-icons/md";
import Profile from "../../assets/adult-beard-boy-casual-220453-min.jpg";
import "./Navbar.scss";
const Login = () => {
  return (
    <Navbar className="nav-bar" expand="lg" fixed="top">
      <Navbar.Brand
        href="/"
        className="nav-bar-brand text-uppercase text-center"
      >
        Hubino
      </Navbar.Brand>
      <Nav className="ml-auto ">
        <Nav.Item>
          <Nav.Link>
            <MdMailOutline className="nav-bar-icon" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <img src={Profile} alt="profile" className="nav-bar-profileimg" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Login;
