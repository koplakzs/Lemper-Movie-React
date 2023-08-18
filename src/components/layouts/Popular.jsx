import React from "react";
import Card from "../common/Card";

const Popular = ({ movies }) => {
  return (
    <div>
      <h3 className="underline text-warning position-relative pb-3 mb-5">
        Popular Movie
      </h3>
      <div className=" height-movie overflow-scroll">
        <div className="row row-cols-1 row-cols-sm-3 gap-3 justify-content-evenly">
          {movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
