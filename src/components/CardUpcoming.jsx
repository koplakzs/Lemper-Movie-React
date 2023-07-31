import React from "react";

const CardUpcoming = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="card-movie-upcoming card bg-transparent mb-4">
      <img
        className="img-upcoming"
        src={`${imgUrl}${movie.poster_path}`}
        alt={`${movie.original_title}`}
      />
      <div className="d-flex justify-content-between mt-2 ">
        <h5 className="card-movie-title card-title fw-bold text-warning m-0 align-self-center">
          {movie.original_title}
        </h5>
        <div className=" align-self-center d-flex justify-content-center gap-2 align-items-center bg-dark rounded-2 p-1 ps-2 pe-2 ms-2">
          <i className="bi bi-star fs-5 text-warning"></i>
          <h5 className="fw-bold m-0 text-warning">{movie.vote_average} </h5>
        </div>
      </div>
    </div>
  );
};

export default CardUpcoming;
