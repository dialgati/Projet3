import React from "react"
import { Dropdown, DropdownButton } from "react-bootstrap";
// import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" className="fs-5" title="DD Menu">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default DropdownMenu