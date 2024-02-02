import React from "react";
import Widgets from "./Widgets"; // Importer le composant Widgets

function FeedsWidget() {
  // Données spécifiques pour les flux
  const feeds = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Vestibulum at eros"
  ];

  return <Widgets title="Feeds" items={feeds} />; // Utilisation du composant Widgets avec les données spécifiques
}

export default FeedsWidget;
