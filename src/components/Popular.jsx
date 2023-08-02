import React from "react";
import Card from "./Card";

const Popular = ({ movies }) => {
  return (
    <div>
      <h3 className="underline text-warning position-relative pb-3 mb-5">
        Popular Movie
      </h3>
      <div className=" height-movie overflow-scroll">
        <div className="d-flex justify-content-evenly gap-4 flex-wrap ps-3 pe-3">
          {movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
