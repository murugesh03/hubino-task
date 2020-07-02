import React from "react";
import { Card, Table } from "react-bootstrap";
import { connect } from "react-redux";
const CustomerList = ({ customer }) => {
  return (
    <Card>
      <Table responsive>
        <thead>
          <tr>
            <td className="text-capitalize">id</td>
            <td className="text-capitalize">name</td>
            <td className="text-capitalize">email </td>
            <td className="text-capitalize">mobile number</td>
            <td className="text-capitalize">gender</td>
          </tr>
        </thead>
        <tbody>
          {customer.map((c) => {
            return (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td className="text-capitalize">{c.name}</td>
                <td>{c.emailId}</td>
                <td>
                  +{c.countryCode} {c.mobileNo}
                </td>
                <td className="text-capitalize">{c.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
};
const mapStateToProps = (state) => ({ customer: state.customer });

export default connect(mapStateToProps)(CustomerList);
