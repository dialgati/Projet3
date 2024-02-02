import React from "react";
import { Table } from "react-bootstrap";

function Tableau() {
  return (
    <div className="mt-4 card py-5 flex-wrap">
      <h5>Project Listing</h5>
      <p>Overview of the projects</p>
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th>Team Lead</th>
            <th>Project</th>
            <th>Status</th>
            <th>Weeks</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>DEV1049</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>DEV1049</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>DEV1049</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>DEV1049</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>DEV1049</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>DEV1049</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Tableau;
