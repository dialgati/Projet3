import React from "react"
import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <div>
      <div>
        <Link
          type="Link"
          className="dropdown-toggle text-light fs-5 text-decoration-none"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Action
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" href="#">
              Action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              Another action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              Something else here
            </Link>
          </li>
          <li className="dropdown-divider"></li>
          <li>
            <Link className="dropdown-item" href="#">
              Separated link
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu