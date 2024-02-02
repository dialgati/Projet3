import ClientCard from "components/Client/ClientCard"
import Dashboard from "components/Dashboard/Dashboard"
import Tableau from "components/Tableau/Tableau"
import React from "react"

function HomePage() {
  return (
    <div>
    <Dashboard />
    <Tableau />
    <ClientCard />
    </div>
  )
}

export default HomePage