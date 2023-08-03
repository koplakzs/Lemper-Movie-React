import React from "react";
import { Link } from "react-router-dom";

const DetailsButton = ({ idMovie }) => {
  console.log(idMovie);
  return (
    <Link
      to={`/movie/${idMovie}`}
      className="btn btn-warning rounded-3 shadow-lg mt-2"
    >
      Detail Movie
    </Link>
  );
};

export default DetailsButton;
