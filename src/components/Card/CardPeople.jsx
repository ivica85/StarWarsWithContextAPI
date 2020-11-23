import React from "react";

const CardPeople = ({ people, style }) => {
  return (
    <div className="card-container">
      <div className="img" style={style} />

      <h1>{people.name}</h1>
    </div>
  );
};

export default CardPeople;
