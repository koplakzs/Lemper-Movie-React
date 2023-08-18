import React from "react";
import CardSearch from "../common/CardSearch";
import { useParams } from "react-router-dom";

const ResultSearch = ({ movies }) => {
  let { params } = useParams();
  return (
    <div className="">
      <h3 className="underline text-warning position-relative pb-3 mb-5">
        Search {params}
      </h3>
      {movies.map((movie, index) => (
        <CardSearch key={index} movie={movie} />
      ))}
    </div>
  );
};

export default ResultSearch;
