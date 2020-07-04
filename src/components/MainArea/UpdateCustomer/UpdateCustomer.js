import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

const UpdateCustomer = ({ modelCustomer, updateCustomer, hide, show }) => {
  const [modifyData, setModifyData] = useState({ ...modelCustomer });

  useEffect(() => {
    setModifyData({ ...modelCustomer });
  }, [modelCustomer]);

  const changeData = (e) => {
    setModifyData({
      ...modifyData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          hide(false);
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Customer Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-5">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  value={modifyData.name}
                  onChange={changeData}
                  placeholder="Enter your Name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="emailId"
                  type="text"
                  value={modifyData.emailId}
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
                  value={modifyData.countryCode}
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
                  value={modifyData.mobileNo}
                  onChange={changeData}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="disabledSelect">Gender</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  id="disabledSelect"
                  onChange={changeData}
                  value={modifyData.gender}
                >
                  {["select", "Male", "Female", "Transgender"].map((v, i) => (
                    <option key={i} value={v.toLowerCase()}>
                      {v}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                updateCustomer(modifyData);
                hide(false);
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateCustomer;
