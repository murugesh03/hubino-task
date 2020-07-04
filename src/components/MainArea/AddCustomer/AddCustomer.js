import React, { useState } from "react";
import { Card, Form, Col, Button } from "react-bootstrap";

const AddCustomer = ({ addCustomer }) => {
  const [addData, setData] = useState({
    name: "",
    emailId: "",
    countryCode: "",
    mobileNo: "",
    gender: "",
    id: Math.floor(Math.random() * 100),
  });

  const changeData = (e) => {
    setData({
      ...addData,
      [e.target.name]: e.target.value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    addCustomer(addData);
    setData({
      name: "",
      emailId: "",
      countryCode: "",
      mobileNo: "",
      gender: "",
      id: Math.floor(Math.random() * 100),
    });
  };
  return (
    <Card>
      <Form className="p-5">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={addData.name}
              onChange={changeData}
              placeholder="Enter your Name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="emailId"
              type="text"
              value={addData.emailId}
              onChange={changeData}
              placeholder="Enter email"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCountryCode">
            <Form.Label>Country Code</Form.Label>
            <Form.Control
              name="countryCode"
              type="number"
              value={addData.countryCode}
              onChange={changeData}
              placeholder="Enter your country code"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              name="mobileNo"
              type="number"
              placeholder="Enter your Mobile Number"
              value={addData.mobileNo}
              onChange={changeData}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              id="disabledSelect"
              value={addData.gender}
              onChange={changeData}
            >
              {["select", "Male", "Female", "Transgender"].map((v, i) => (
                <option key={i} value={v.toLowerCase()}>
                  {v}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit" onClick={saveData}>
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default AddCustomer;
