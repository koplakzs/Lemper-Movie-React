import React from "react";
import CardUpcoming from "../common/CardUpcoming";

const Upcoming = ({ movie }) => {
  return (
    <div>
      <h3 className="underline text-warning position-relative pb-3 mb-5 ms-5">
        Upcoming Movie
      </h3>
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 ">
        {movie.map((movie, index) => (
          <CardUpcoming key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
