import React from "react";

function PlantCard({ plant, onToggleSoldOut }) {
  const { id, name, image, price, isSoldOut } = plant;

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>

      <button 
        className={isSoldOut ? "" : "primary"}
        onClick={() => onToggleSoldOut(id)}
      >
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
