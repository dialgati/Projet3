import Dashboard from "components/Dashboard/Dashboard"
import Feeds from "components/Feeds/Feeds"
import ProjectTables from "components/ProjectTable/ProjectTables";
import React from "react"

function HomePage() {
  return (
    <div>
      <Dashboard />
      <Feeds />
      <ProjectTables />
    </div>
  );
}

export default HomePage