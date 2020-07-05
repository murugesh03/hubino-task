import React from "react";
import { MdUpdate, MdList, MdPlaylistAdd } from "react-icons/md";
import "./SideBar.scss";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SideBar = ({ activeId }) => {
  return (
    <aside className="sidebar position-fixed">
      <Nav className="d-flex flex-column my-5 sidbar-list">
        <Nav.Item>
          <NavLink
            to="/"
            exact
            className="nav-link py-4"
            activeClassName="active"
          >
            <p className="sidebar-icon text-center mb-0">
              <MdList />
            </p>
            <p className="text-capitalize text-center sidebar-name">
              customer list
            </p>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/add_customer"
            className="nav-link py-4"
            activeClassName="active"
          >
            <p className="sidebar-icon text-center mb-0">
              <MdPlaylistAdd />
            </p>
            <p className="text-capitalize text-center sidebar-name">
              add customer
            </p>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/update_customer"
            className="nav-link py-4"
            activeClassName="active"
          >
            <p className="text-center sidebar-icon mb-0">
              <MdUpdate />
            </p>
            <p className="text-capitalize text-center sidebar-name">
              update customer
            </p>
          </NavLink>
        </Nav.Item>
      </Nav>
    </aside>
  );
};

export default SideBar;
