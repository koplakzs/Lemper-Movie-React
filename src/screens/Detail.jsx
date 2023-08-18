import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResultDetail from "../components/layouts/ResultDetail";

const Detail = () => {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const header = {
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
  };
  const fetchDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          headers: header,
          params: { language: "en-US" },
        }
      );
      setDetailMovie({
        title: response.data.original_title,
        background_path: response.data.backdrop_path,
        poster_path: response.data.poster_path,
        overview: response.data.overview,
        date: response.data.release_date,
        genres: response.data.genres,
        score: response.data.vote_average,
      });
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);
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
