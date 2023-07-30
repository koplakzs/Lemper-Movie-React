import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";

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
          setNowPlay(res.data.results);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div>
      <Carousel movie={nowPlay.slice(0, 5)} />
      <div className="ms-5 me-5 mb-5">
        <h1 className="underline text-warning position-relative pb-3">
          Now Playing
        </h1>
        <Cards movies={nowPlay.slice(5)} />
      </div>
      <div className="space-movies ms-5 me-5 d-flex justify-content-between">
        <div className="border col">
          <h3 className="underline text-warning position-relative pb-3">
            Popular Movie
          </h3>
          {/* <Cards movies={""} /> */}
        </div>
        <div className="border col-4">
          <h3 className="underline text-warning position-relative pb-3">
            Upcoming Movie
          </h3>
          {/* <Cards movies={""} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
