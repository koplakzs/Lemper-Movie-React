import React from "react";

const ResultDetail = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const imgUrlPoster = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="detail text-light d-flex justify-content-center align-items-center">
      <img
        className="h-100 w-100 opacity-50 z-0 position-absolute"
        src={`${imgUrl}${movie.background_path}`}
        alt=""
      />
      <div className="z-1 row row-cols-1 row-cols-md-2 justify-content-center  gap-4">
        <img
          className="col-5 col-md-3"
          src={`${imgUrlPoster}${movie.poster_path}`}
          alt=""
        />
        <div className="col-10 d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center align-items-center gap-4">
            <h1 className="fw-bold text-center"> {movie.title} </h1>
            <div className=" align-self-center d-flex justify-content-center gap-2 align-items-center bg-dark rounded-2 p-1 ps-2 pe-2 ms-2">
              <i className="bi bi-star fs-5 text-warning"></i>
              <h5 className="fw-bold m-0 text-warning">{movie.score} </h5>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-3 mt-3 mb-3 flex-wrap">
            {movie.genres.map((genre, index) => (
              <p className="bg-warning text-dark rounded-2 p-2" key={index}>
                {genre.name}
              </p>
            ))}
          </div>
          <p className="overview fs-5"> {movie.overview} </p>
          <p className="text-center">Release : {movie.date} </p>
        </div>
      </div>
    </div>
  );
};

export default ResultDetail;
