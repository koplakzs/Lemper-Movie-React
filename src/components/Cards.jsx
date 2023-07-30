import React from "react";
import Card from "./Card";

const Cards = ({ movies }) => {
  console.log(movies);
  return (
    <div className="d-flex justify-content-evenly gap-4 flex-wrap mt-5">
      {movies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Cards;
