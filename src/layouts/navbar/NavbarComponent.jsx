import DropdownMenu from "components/menu/DropdownMenu";
import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import profil from "./images/profil.jpg"
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
      <div className="d-flex text-decoration-none text-light">
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
      <div className="">
        <img
          src={profil}
          alt=""
          className="image"
        />
      </div>
    </div>
  );
}

export default NavbarComponent;
