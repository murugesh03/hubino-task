import React from "react";
import { Container } from "react-bootstrap";
import { addCustomer } from "../../Action/index";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./MainArea.scss";
import CustomerList from "./CustomerList/CustomerList";
import AddCustomer from "./AddCustomer/AddCustomer";

const MainArea = ({ addCustomer }) => {
  return (
    <div className="main-area">
      <Container className="main-area-container">
        <Switch>
          <Route path="/" exact component={() => <CustomerList />} />
          <Route
            path="/add_customer"
            component={() => <AddCustomer addCustomer={addCustomer} />}
          />
        </Switch>
      </Container>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addCustomer: (p) => dispatch(addCustomer(p)),
});

export default connect(null, mapDispatchToProps)(MainArea);
