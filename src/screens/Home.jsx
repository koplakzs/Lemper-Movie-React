import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const Home = () => {
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const [nowPlay, setNowPlay] = useState([]);
  const header = {
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
  };

  const fetchMovie = () => {
    try {
      axios
        .get("https://api.themoviedb.org/3/movie/now_playing", {
          headers: header,
        })
        .then((res) => {
          setNowPlay(res.data.results.slice(0, 5));
          console.log(res.data.results.slice(0, 5));
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  return <Carousel movie={nowPlay} />;
};

export default Home;
