import React from "react";
import { Link } from "react-router-dom";
import DetailsButton from "./DetailsButton";

const Carousel = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {movie.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {movie.map((movie, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""} `}
          >
            <img
              className="h-100 w-100"
              src={`${imgUrl}${movie.backdrop_path}`}
            />

            <div className="container">
              <div className="carousel-caption ">
                <h1 className="text-shadow fw-bold">{movie.original_title}</h1>
                <p className="text-shadow-blur fs-5">{movie.overview}</p>

                <DetailsButton idMovie={movie.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
