import React from "react";

const Card = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div
      className="card-movie card"
      style={{ backgroundImage: `url(${imgUrl}${movie.poster_path})` }}
    >
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between mt-auto ">
          {" "}
          <h5 className="card-movie-title card-title fw-bold text-warning m-0 align-self-center">
            {movie.original_title}{" "}
          </h5>
          <div className=" align-self-center d-flex justify-content-center gap-2 align-items-center bg-dark rounded-2 p-1 ps-2 pe-2 ms-2">
            <i className="bi bi-star fs-5 text-warning"></i>
            <h5 className="fw-bold m-0 text-warning">{movie.vote_average} </h5>
          </div>
        </div>
        <a href="#" className="btn btn-warning rounded-3 shadow-lg mt-2">
          Detail Movie
        </a>
      </div>
    </div>
  );
};

export default Card;
