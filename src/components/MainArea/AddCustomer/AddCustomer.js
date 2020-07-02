import React from "react";
import { Card, Form, Col, Button } from "react-bootstrap";

const AddCustomer = () => {
  return (
    <Card>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter your Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCountryCode">
            <Form.Label>Country Code</Form.Label>
            <Form.Control
              type="country code"
              placeholder="Enter your country code"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="mobile number"
              placeholder="Enter your Mobile Number"
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default AddCustomer;
