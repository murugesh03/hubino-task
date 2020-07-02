import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import SideBar from "./SideBar/SideBar";
import MainArea from "./MainArea/MainArea";

function App() {
  return (
    <Router>
      <Navbar />
      <Row className="m-0">
        <SideBar />
        <MainArea />
      </Row>
    </Router>
  );
}

export default App;
