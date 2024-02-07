import DropdownMenu from "components/menu/DropdownMenu";
import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import profil from "./images/profil.jpg"
import { DropdownButton, Dropdown } from "react-bootstrap";
function NavbarComponent({ bgColor, navbarContainerStyles }) {
  return (
    <div
      className="d-flex justify-content-between"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        height: 60,
        backgroundColor: bgColor ? bgColor : "#2280f7",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        ...navbarContainerStyles,
      }}
    >
      <div className="d-flex text-decoration-none ms-5 text-light">
        <div className="">
          <Link className="me-3 text-decoration-none text-light fs-5">
            Starter
          </Link>
          <Link className="me-3 text-decoration-none text-light fs-5">
            About
          </Link>
        </div>
        <DropdownMenu />
      </div>
      <div>
        <DropdownButton id="dropdown-basic-button" className="">
          <div className="text-center">
            <img src={profil} alt="" className="rounded-circle w-50" />
          </div>
          <h6 className="text-secondary-subtile ms-3">Info</h6>
          <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Edit Profile</Dropdown.Item>
          <p className="border border-light fs-1 my-2"></p>
          <Dropdown.Item href="#/action-3">My Balance</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Inbox</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

export default NavbarComponent;

// <div className="">
//   <img src={profil} alt="" className="image" />
// </div>;