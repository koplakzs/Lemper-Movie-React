import React from "react";
import Card from "./Card";

const NowPlay = ({ movies }) => {
  return (
    <div>
      <h1 className="underline text-warning position-relative pb-3">
        Now Playing
      </h1>
      <div className="d-flex justify-content-evenly gap-4 flex-wrap mt-5">
        {movies.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default NowPlay;
