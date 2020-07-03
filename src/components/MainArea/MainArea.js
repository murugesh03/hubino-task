import React from "react";
import { Col, Container } from "react-bootstrap";
import { addCustomer, updateCustomer } from "../../Action/index";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./MainArea.scss";
import CustomerList from "./CustomerList/CustomerList";
import AddCustomer from "./AddCustomer/AddCustomer";
import UpdateCustomer from "./UpdateCustomer/UpdateCustomer";

const MainArea = (addCustomer, updateCustomer) => {
  return (
    <Col className="main-area p-0" md={10}>
      <Container className="main-area-container">
        <Switch>
          <Route path="/" exact>
            <CustomerList />
          </Route>
          <Route path="/addcustomer">
            <AddCustomer addCustomer={addCustomer} />
            {/* <p>hi</p> */}
          </Route>
          <Route path="/updatecontact">
            <UpdateCustomer updateCustomer={updateCustomer} />
            {/* <p>hey</p> */}
          </Route>
        </Switch>
      </Container>
    </Col>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addCustomer: (p) => dispatch(addCustomer(p)),
  updateCustomer: (p) => dispatch(updateCustomer(p)),
});

export default connect(mapDispatchToProps)(MainArea);
