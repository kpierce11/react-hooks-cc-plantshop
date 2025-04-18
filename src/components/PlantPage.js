import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery , setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data.map((plant) => ({...plant, isSoldOut: false}))));
  }, []);
  
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
