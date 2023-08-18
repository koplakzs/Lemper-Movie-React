import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "../components/layouts/Carousel";
import Upcoming from "../components/layouts/Upcoming";
import Popular from "../components/layouts/Popular";
import Footer from "../components/layouts/Footer";
import NowPlay from "../components/layouts/NowPlay";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [nowPlay, setNowPlay] = useState([]);
  const [pop, setPop] = useState([]);
  const [upComing, setUpcoming] = useState([]);
  const header = {
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
  };

  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing",
        {
          headers: header,
        }
      );
      setNowPlay(response.data.results);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchMoviePopular = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          headers: header,
        }
      );
      setPop(response.data.results);
    } catch (error) {
      setIsError(error);
    }
  };
  const fetchMovieUpComing = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming",
        {
          headers: header,
        }
      );
      setUpcoming(response.data.results);
    } catch (error) {
      setIsError(error);
    }
  };

  useEffect(() => {
    fetchMovie();
    fetchMoviePopular();
    fetchMovieUpComing();
  }, []);
  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : isError ? (
        <p>Erorr data</p>
      ) : (
        <div>
          <Carousel movie={nowPlay.slice(0, 5)} />

          <div className="mx-5">
            <NowPlay movies={nowPlay.slice(5)} />
          </div>
          <div className="space-movies ms-5 me-5 row row-cols-1 row-cols-sm-2 flex-wrap">
            <div className="col col-sm-8 ">
              <Popular movies={pop} />
            </div>
            <div className="col col-sm-4 border-start border-warning border-4 mt-5 mt-sm-0">
              <Upcoming movie={upComing.slice(0, 5)} />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
