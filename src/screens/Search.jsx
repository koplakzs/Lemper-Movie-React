import React from "react";
import { useParams } from "react-router-dom";
import CardSearch from "../components/CardSearch";

const Search = () => {
  let { params } = useParams();
  console.log(params);
  return (
    <div className="mt-5 pt-5 ms-5 me-5">
      <h3 className="underline text-warning position-relative pb-3 mb-5">
        Search Movie {params}
      </h3>
      <CardSearch movie={""} />
    </div>
  );
};

export default Search;
