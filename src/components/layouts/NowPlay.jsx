import React from "react";
import Card from "../common/Card";

const NowPlay = ({ movies }) => {
  return (
    <div>
      <h1 className="underline text-warning position-relative pb-3">
        Now Playing
      </h1>
      <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-between gap-4 gap-sm-3">
        {movies.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default NowPlay;
