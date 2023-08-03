import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ResultDetail from "../components/ResultDetail";

const Detail = () => {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //   const loc = useLocation();
  //   const adult = new URLSearchParams(loc.search).get("search"); untuk mendapatkan paramater dari url bernama search
  const header = {
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
  };
  const fetchDetail = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: header,
        params: { language: "en-US" },
      })
      .then((res) => {
        setDetailMovie({
          title: res.data.original_title,
          background_path: res.data.backdrop_path,
          poster_path: res.data.poster_path,
          overview: res.data.overview,
          date: res.data.release_date,
          genres: res.data.genres,
          score: res.data.vote_average,
        });
      })
      .catch((err) => setIsError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => fetchDetail(), []);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data.</p>
      ) : (
        <ResultDetail movie={detailMovie} />
      )}
    </div>
  );
};

export default Detail;
