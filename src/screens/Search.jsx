import { useParams } from "react-router-dom";
import ResultSearch from "../components/ResultSearch";
import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {
  let { params } = useParams();
  const [searchMovie, setSearchMovie] = useState([]);
  const header = {
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
  };

  const fetchSearch = () => {
    try {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          headers: header,
          params: {
            query: `${params}`,
            include_adult: "false",
            language: "en-US",
            page: "1",
          },
        })
        .then((res) => setSearchMovie(res.data.results))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => fetchSearch(), [params]);
  return (
    <div className="mt-5 pt-5 ms-5 me-5">
      <ResultSearch movies={searchMovie} />
    </div>
  );
};

export default Search;
