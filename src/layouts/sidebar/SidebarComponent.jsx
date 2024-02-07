import React, { cloneElement } from "react";
import SidebarItem from "../../components/SidebarItem";
import ResourceDataMap from "../../components/ResourceDataMap";
import { links } from "routes/navigation/sidebarLinks";
import { Navbar } from "react-bootstrap";
import "./css/Sidebar.css";
import { FaHamburger } from "react-icons/fa";


const SidebarComponent = ({ bgColor, activeLinkColor, activeLinkBgColor, colorOnHover, linkColor }) => {
  const ClonedSidebarItem = ({ linkItem }) => cloneElement(<SidebarItem linkItem={linkItem} />, {
    activeLinkColor,
    activeLinkBgColor,
    colorOnHover,
    linkColor
  })
  return (
    <div
      style={{
        backgroundColor: bgColor ? bgColor : "#fff",
        height: "100%",
        padding: "25px 10px",
      }}
    >
      <div className="d-flex justify-content-start align-items-center flex-wrap">
        <Navbar.Brand
          href="#Dashboard"
          className="d-flex justify-content-around flex-wrap"
        >
          <FaHamburger className="fs-2 ms-2" />
          <p className=" ms-3 theme"> Xtreme</p>
        </Navbar.Brand>
      </div>
      <ResourceDataMap
        resourceData={links}
        resourceItem={ClonedSidebarItem}
        resourceName="linkItem"
      />
    </div>
  );
};

export default SidebarComponent;
