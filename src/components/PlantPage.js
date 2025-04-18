import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery , setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data.map((plant) => ({...plant, isSoldOut: false}))));
  }, []);

  const visiblePlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  

  function handleAddPlant(newPlant) {
    setPlants((plants) => [...plants, newPlant]);
  }

  function handleToggleSoldOut(id) {
    setPlants((plants) => 
      plants.map((plant) => 
        plant.id === id ? {...plant, isSoldOut: !plant.isSoldOut} : plant
      )
    );
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        />
      <PlantList 
        plants={visiblePlants}
        onToggleSoldOut={handleToggleSoldOut}
        />
    </main>
  );
}

export default PlantPage;
