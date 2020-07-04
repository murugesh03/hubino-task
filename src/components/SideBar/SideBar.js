import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdUpdate, MdList, MdPlaylistAdd } from "react-icons/md";
import "./SideBar.scss";
const SideBar = () => {
  return (
    <aside className="sidebar position-fixed">
      <ul className="my-5">
        <li className="text-center py-4">
          <Link to="/">
            <span className="sidebar-icon">
              <MdList />
            </span>
            <p className="text-capitalize">customer list</p>
          </Link>
        </li>
        <li className="text-center py-4">
          <Link to="/add_customer">
            <span className="sidebar-icon">
              <MdPlaylistAdd />
            </span>
            <p className="text-capitalize">add customer</p>
          </Link>
        </li>
        <li className="text-center py-4">
          <Link to="/update_customer">
            <span className="sidebar-icon">
              <MdUpdate />
            </span>
            <p className="text-capitalize">update customer</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
