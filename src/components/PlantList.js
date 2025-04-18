import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onToggleSoldOut }) {
  const plantCards = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      plant={plant}
      onToggleSoldOut={onToggleSoldOut}
    />
  ));

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
