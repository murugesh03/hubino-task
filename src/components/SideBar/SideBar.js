import React from "react";
import { MdUpdate, MdList, MdPlaylistAdd } from "react-icons/md";
import "./SideBar.scss";
import { Nav } from "react-bootstrap";

const SideBar = (activeId) => {
  return (
    <aside className="sidebar position-fixed">
      <Nav className="d-flex flex-column my-5 sidbar-list" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">
            <p className="sidebar-icon text-center">
              <MdList />
            </p>
            <p className="text-capitalize text-center">customer list</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/add_customer" eventKey="link-1">
            <p className="sidebar-icon text-center">
              <MdPlaylistAdd />
            </p>
            <p className="text-capitalize text-center">add customer</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/update_customer" eventKey="link-2">
            <p className="text-center sidebar-icon">
              <MdUpdate />
            </p>
            <p className="text-capitalize text-center">update customer</p>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </aside>
  );
};

export default SideBar;
