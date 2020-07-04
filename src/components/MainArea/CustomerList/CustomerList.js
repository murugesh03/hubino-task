import React, { useState } from "react";
import { Card, Table, Button } from "react-bootstrap";
import { MdMoreHoriz } from "react-icons/md";
import { connect } from "react-redux";
import { updateCustomer } from "../../../Action/index";
import UpdateCustomer from "../UpdateCustomer/UpdateCustomer";
import "./CustomerList.scss";
const CustomerList = ({ customer, updateCustomer }) => {
  const [modalShow, setModalShow] = useState(false);
  const [editModalData, setEditModalData] = useState({});

  return (
    <>
      <Card className="px-5 card-view">
        <Card.Title className="pt-3 pb-2 mx-2  card-heading">
          Customer List
          <a href="#" className="float-right card-dots">
            <MdMoreHoriz />
          </a>
        </Card.Title>
        <Table responsive>
          <thead>
            <tr>
              <td className="text-capitalize">id</td>
              <td className="text-capitalize">name</td>
              <td className="text-capitalize">email </td>
              <td className="text-capitalize">mobile number</td>
              <td className="text-capitalize">gender</td>
              <td className="text-capitalize">edit</td>
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
                      className="card-button"
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
