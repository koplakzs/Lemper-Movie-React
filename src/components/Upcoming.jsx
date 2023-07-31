import React from "react";
import CardUpcoming from "./CardUpcoming";

const Upcoming = ({ movie }) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center gap-4">
      {movie.map((movie, index) => (
        <CardUpcoming key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Upcoming;
