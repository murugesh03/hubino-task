import React, { useState, useEffect } from "react";
import { Card, Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { updateCustomer } from "../../../Action/index";
import UpdateCustomer from "../UpdateCustomer/UpdateCustomer";
const CustomerList = ({ customer, updateCustomer }) => {
  const [modalShow, setModalShow] = useState(false);
  const [editModalData, setEditModalData] = useState({});
  console.log(editModalData);

  // useEffect(() => {
  //   setModalShow(true);
  // }, [editModalData]);

  return (
    <>
      <Card className="px-5 ">
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
            {customer.map((c, index) => {
              return (
                <tr key={index}>
                  <td>{c.id}</td>
                  <td className="text-capitalize">{c.name}</td>
                  <td>{c.emailId}</td>
                  <td>
                    +{c.countryCode} {c.mobileNo}
                  </td>
                  <td className="text-capitalize">{c.gender}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => {
                        console.log(c);
                        setEditModalData(c);
                        setModalShow(true);
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
      <UpdateCustomer
        updateCustomer={updateCustomer}
        show={modalShow}
        hide={setModalShow}
        modelCustomer={editModalData}
      />
    </>
  );
};
const mapStateToProps = (state) => ({ customer: state.customer });
const mapDispatchToProps = (dispatch) => ({
  updateCustomer: (p) => dispatch(updateCustomer(p)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
