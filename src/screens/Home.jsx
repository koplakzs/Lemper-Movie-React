import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Upcoming from "../components/Upcoming";
import Popular from "../components/Popular";
import Footer from "../components/Footer";
import NowPlay from "../components/NowPlay";

const Home = () => {
  const [nowPlay, setNowPlay] = useState([]);
  const [pop, setPop] = useState([]);
  const [upComing, setUpcoming] = useState([]);
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
  const fetchMoviePopular = () => {
    try {
      axios
        .get("https://api.themoviedb.org/3/movie/popular", {
          headers: header,
        })
        .then((res) => {
          setPop(res.data.results);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const fetchMovieUpComing = () => {
    try {
      axios
        .get("https://api.themoviedb.org/3/movie/upcoming", {
          headers: header,
        })
        .then((res) => {
          setUpcoming(res.data.results);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMovie();
    fetchMoviePopular();
    fetchMovieUpComing();
  }, []);
  return (
    <div>
      <Carousel movie={nowPlay.slice(0, 5)} />
      <div className="ms-5 me-5 mb-5">
        <NowPlay movies={nowPlay.slice(5)} />
      </div>
      <div className="space-movies ms-5 me-5 d-flex justify-content-between flex-wrap">
        <div className="col ">
          <Popular movies={pop} />
        </div>
        <div className="col-4 border-start border-warning border-4">
          <Upcoming movie={upComing.slice(0, 5)} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
