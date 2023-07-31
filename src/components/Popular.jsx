import React from "react";
import Card from "./Card";

const Popular = ({ movies }) => {
  return (
    <div className="d-flex justify-content-evenly gap-4 flex-wrap">
      {movies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Popular;
