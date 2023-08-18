import React from "react";
import DetailsButton from "./DetailsButton";

const CardSearch = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="border-bottom border-warning border-2 pb-3 mb-3">
      <div className="row row-cols-1 row-cols-md-2 justify-content-center justify-content-md-start gap-3">
        <img
          className="col img-search m-0"
          src={`${imgUrl}${movie.poster_path}`}
          alt={`${movie.original_title}`}
        />
        <div className="col text-light">
          <h4>{movie.original_title}</h4>
          <div className="d-flex justify-content-start gap-4 mt-3">
            <div className=" align-self-center d-flex justify-content-center gap-2 align-items-center bg-warning rounded-2 p-1 ps-2 pe-2 ms-2">
              <i className="bi bi-star fs-5 text-dark"></i>
              <h5 className="fw-bold m-0 text-dark">{movie.vote_average} </h5>
            </div>
            <h5 className="align-self-center">Date : {movie.release_date} </h5>
          </div>
          <p className="overview me-0 me-md-5 mt-3"> {movie.overview} </p>
          <DetailsButton idMovie={movie.id} />
        </div>
      </div>
    </div>
  );
};

export default CardSearch;
